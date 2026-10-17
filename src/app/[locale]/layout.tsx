import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import {
  Big_Shoulders,
  Cormorant_Garamond,
  Archivo,
  JetBrains_Mono,
} from "next/font/google";
import { routing } from "@/i18n/routing";
import { CartProvider } from "@/lib/cart-context";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

const display = Big_Shoulders({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
});

const clasica = Cormorant_Garamond({
  variable: "--font-clasica",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic", "normal"],
  display: "swap",
});

const cuerpo = Archivo({
  variable: "--font-cuerpo",
  subsets: ["latin"],
  weight: "variable",
  axes: ["wdth"],
  display: "swap",
});

const datos = JetBrains_Mono({
  variable: "--font-datos",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home.hero" });
  return {
    title: `Spartans 8327 — ${t("headline")}`,
    description: t("sub"),
  };
}

export const viewport: Viewport = {
  themeColor: "#14100E",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "common" });

  return (
    <html
      lang={locale}
      className={`${display.variable} ${clasica.variable} ${cuerpo.variable} ${datos.variable} h-full`}
    >
      <body className="flex min-h-full flex-col bg-[var(--tinta)] text-[var(--papel)] antialiased">
        <a href="#main-content" className="skip-link">
          {t("skipToContent")}
        </a>
        <NextIntlClientProvider>
          <CartProvider>
            <Header />
            <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
