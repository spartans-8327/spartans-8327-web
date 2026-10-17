"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type CartItem = {
  /** id único de la línea: productId + variante serializada */
  lineId: string;
  productId: string;
  name: string;
  variantLabel: string | null;
  priceMXN: number | null;
  quantity: number;
  /** photoSlug de la variante agregada — null si el producto no tiene foto para mostrar. */
  photoSlug: string | null;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, "quantity">, quantity?: number) => void;
  updateQuantity: (lineId: string, quantity: number) => void;
  removeItem: (lineId: string) => void;
  clear: () => void;
  itemCount: number;
  confirmedTotal: number;
  hasPendingPriceItems: boolean;
  isHydrated: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

// sessionStorage (no localStorage): el carrito vive mientras la pestaña está
// abierta — sobrevive a recargar la página y a navegar entre rutas dentro de
// la misma visita, pero no se comparte entre pestañas/navegadores distintos
// y se vacía solo al cerrar la pestaña o abrir una visita nueva. Es el
// mecanismo nativo del navegador para exactamente ese alcance: no hace falta
// una marca de expiración manual (eso era necesario con localStorage, que sí
// persiste entre visitas).
const STORAGE_KEY = "spartans8327.cart";
// Clave que usaba la implementación anterior (localStorage, con expiración
// de 7 días) — nunca se lee, solo se limpia una vez si quedó de antes.
const LEGACY_LOCALSTORAGE_KEY = "spartans8327.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Carga inicial desde sessionStorage. Intencionalmente un useEffect con
  // setState síncrono: es el patrón estándar para hidratar estado del
  // cliente sin causar un mismatch de hidratación (el servidor siempre
  // renderiza el carrito vacío). No hay forma de leer sessionStorage durante
  // el render inicial en un Server Component.
  useEffect(() => {
    try {
      const raw = window.sessionStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) {
          // eslint-disable-next-line react-hooks/set-state-in-effect -- hidratación única desde sessionStorage, ver comentario arriba
          setItems(parsed as CartItem[]);
        }
      }
    } catch {
      // sessionStorage no disponible o corrupto: se ignora, el carrito inicia vacío.
    } finally {
      setIsHydrated(true);
    }
    try {
      window.localStorage.removeItem(LEGACY_LOCALSTORAGE_KEY);
    } catch {
      // localStorage no disponible: nada que limpiar.
    }
  }, []);

  // Persistencia. No se guarda ningún dato personal, solo la selección de
  // productos de esta pestaña.
  useEffect(() => {
    if (!isHydrated) return;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Si sessionStorage no está disponible (modo privado, cuota llena), se ignora.
    }
  }, [items, isHydrated]);

  const addItem = useCallback<CartContextValue["addItem"]>((item, quantity = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.lineId === item.lineId);
      if (existing) {
        return prev.map((i) =>
          i.lineId === item.lineId ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { ...item, quantity }];
    });
  }, []);

  const updateQuantity = useCallback((lineId: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((i) => i.lineId !== lineId);
      return prev.map((i) => (i.lineId === lineId ? { ...i, quantity } : i));
    });
  }, []);

  const removeItem = useCallback((lineId: string) => {
    setItems((prev) => prev.filter((i) => i.lineId !== lineId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const itemCount = useMemo(() => items.reduce((sum, i) => sum + i.quantity, 0), [items]);

  const confirmedTotal = useMemo(
    () =>
      items.reduce(
        (sum, i) => sum + (i.priceMXN != null ? i.priceMXN * i.quantity : 0),
        0
      ),
    [items]
  );

  const hasPendingPriceItems = useMemo(
    () => items.some((i) => i.priceMXN == null),
    [items]
  );

  const value: CartContextValue = {
    items,
    addItem,
    updateQuantity,
    removeItem,
    clear,
    itemCount,
    confirmedTotal,
    hasPendingPriceItems,
    isHydrated,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart debe usarse dentro de <CartProvider>");
  return ctx;
}
