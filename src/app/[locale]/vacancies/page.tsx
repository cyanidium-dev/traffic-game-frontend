import Loader from "@/components/shared/loader/Loader";
import Hero from "@/components/vacancies/hero/Hero";
import VacanciesList from "@/components/vacancies/vacanciesList/VacanciesList";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { Suspense } from "react";

interface VacanciesPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function VacanciesPage({ params }: VacanciesPageProps) {
  const { locale } = await params;
  const vacanciesList = await fetchSanityData(allPostsQuery, {
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
