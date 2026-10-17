import { useTranslations } from "next-intl";
import { EXAMPLE_PRODUCTS } from "@/content/site-data";
import ProductCard from "@/components/store/ProductCard";
import CartPanel from "@/components/store/CartPanel";

export default function StorePage() {
  const t = useTranslations("store");

  const categories = ["apparel", "accessories"] as const;

  return (
    <section className="placa tienda" data-placa="papel">
      <div className="wrap">
        <header className="encabezado">
          <p className="creditos">
            <span>{t("title")}</span>
            <span>{t("priceConfirmed")}</span>
          </p>
          <h1 className="t1">{t("title")}</h1>
          <p className="prosa" style={{ opacity: 0.85 }}>
            {t("intro")}
          </p>
          <p className="dato" style={{ marginTop: "10px" }}>
            {t("emptyCatalog")}
          </p>
        </header>

        <div className="tienda__grid">
          <div className="tienda__productos">
            {categories.map((cat) => {
              const products = EXAMPLE_PRODUCTS.filter((p) => p.category === cat);
              if (products.length === 0) return null;
              return products.map((product, i) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  featured={cat === "apparel" && i === 0}
                />
              ));
            })}
          </div>

          <aside className="recibo" aria-label={t("title")}>
            <CartPanel />
          </aside>
        </div>
      </div>
    </section>
  );
}
