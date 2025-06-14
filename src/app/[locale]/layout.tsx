import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations, getLocale } from "next-intl/server";
import { generateDefaultMetadata } from "@/utils/generateDefaultMetadata";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const actay = localFont({
  src: "../../fonts/ActayWide-Bold.otf",
  variable: "--font-actay",
});

const guanoApes = localFont({
  src: "../../fonts/GuanoApes.otf",
  variable: "--font-guano-apes",
});

export async function generateMetadata() {
  const locale = await getLocale();
  const t = await getTranslations("metaData");

  return generateDefaultMetadata(t, locale);
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <body
        className={`${montserrat.variable} ${actay.variable} ${guanoApes.variable} relative z-[1] flex min-h-screen flex-col antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 pt-24">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
