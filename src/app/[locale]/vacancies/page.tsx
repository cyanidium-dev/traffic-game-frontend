import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/vacancies/hero/Hero";
import VacanciesList from "@/components/vacancies/vacanciesList/VacanciesList";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allVacanciesQuery } from "@/lib/queries";
import { Suspense } from "react";
import { Locale } from "next-intl";

interface VacanciesPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function VacanciesPage({ params }: VacanciesPageProps) {
  const { locale } = await params;
  const vacanciesList = await fetchSanityData(allVacanciesQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <VacanciesList vacanciesList={vacanciesList} />
      </Suspense>
    </>
  );
}
