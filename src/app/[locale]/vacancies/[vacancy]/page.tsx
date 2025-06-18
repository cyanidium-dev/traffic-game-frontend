import Description from "@/components/vacancy/description/Description";
import Hero from "@/components/vacancy/hero/Hero";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singleVacancyQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { generateDefaultMetadata } from "@/utils/generateDefaultMetadata";

interface VacancyPageProps {
  params: Promise<{ vacancy: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: VacancyPageProps): Promise<Metadata> {
  const { vacancy, locale } = await params;
  const t = await getTranslations("metaData");

  const currentVacancy = await fetchSanityData(singleVacancyQuery, {
    slug: vacancy,
    lang: locale,
  });

  return {
    title: currentVacancy?.title || generateDefaultMetadata(t, locale).title,
    description:
      currentVacancy?.description ||
      generateDefaultMetadata(t, locale).description,
    openGraph: {
      images: [
        {
          url: currentVacancy?.image || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Traffic Game",
        },
      ],
    },
  };
}

export default async function VacancyPage({ params }: VacancyPageProps) {
  const { vacancy, locale } = await params;
  const currentVacancy = await fetchSanityData(singleVacancyQuery, {
    slug: vacancy,
    lang: locale,
  });

  if (!currentVacancy) return null;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero vacancy={currentVacancy} />
        <Description vacancy={currentVacancy} />
      </Suspense>
    </>
  );
}
