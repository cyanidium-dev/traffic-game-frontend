import About from "@/components/home/about/About";
import Benefits from "@/components/home/benefits/Benefits";
import Blog from "@/components/home/blog/Blog";
import Hero from "@/components/home/hero/Hero";
import Offers from "@/components/home/offers/Offers";
import Partners from "@/components/home/partners/Partners";
import Vacancies from "@/components/home/vacancies/Vacancies";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allPostsQuery, allVacanciesQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";

interface HomePageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: HomePageProps) {
  const { locale } = await params;

  const postsList = await fetchSanityData(allPostsQuery, {
    lang: locale,
  });

  const vacanciesList = await fetchSanityData(allVacanciesQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Benefits />
      <Partners />
      <About />
      <Suspense fallback={<Loader />}>
        <Vacancies vacanciesList={vacanciesList} />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Blog postsList={postsList} />
      </Suspense>
      <Offers />
    </>
  );
}
