import BlogList from "@/components/blog/blogList/BlogList";
import Hero from "@/components/blog/hero/Hero";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allPostsQuery } from "@/lib/queries";
import { Suspense } from "react";
import Loader from "@/components/shared/loader/Loader";

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const postsList = await fetchSanityData(allPostsQuery, {
    lang: locale,
  });

  return (
    <>
      <Hero />
      <Suspense fallback={<Loader />}>
        <BlogList postsList={postsList} />
      </Suspense>
    </>
  );
}
