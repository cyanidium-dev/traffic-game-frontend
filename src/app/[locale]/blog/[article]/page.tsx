import Description from "@/components/article/description/Description";
import Hero from "@/components/article/hero/Hero";
import WorkTogetherCTA from "@/components/article/workTogetherCTA/WorkTogetherCTA";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { singlePostQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { generateDefaultMetadata } from "@/utils/generateDefaultMetadata";

interface ArticlePageProps {
  params: Promise<{ article: string; locale: Locale }>;
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { article, locale } = await params;
  const t = await getTranslations("metaData");

  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  return {
    title: currentArticle?.title || generateDefaultMetadata(t, locale).title,
    description:
      currentArticle?.description ||
      generateDefaultMetadata(t, locale).description,
    openGraph: {
      images: [
        {
          url: currentArticle?.image || "/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Traffic Game",
        },
      ],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { article, locale } = await params;
  const currentArticle = await fetchSanityData(singlePostQuery, {
    slug: article,
    lang: locale,
  });

  if (!currentArticle) return null;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Hero />
        <Description />
      </Suspense>
      <WorkTogetherCTA />
    </>
  );
}
