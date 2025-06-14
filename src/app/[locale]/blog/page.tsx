import BlogList from "@/components/blog/blogList/BlogList";
import Hero from "@/components/blog/hero/Hero";
import { Locale } from "next-intl";
import { fetchSanityData } from "@/utils/fetchSanityData";
import { allPostsQuery } from "@/lib/queries";

interface BlogPageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { locale } = await params;
  const postsList = await fetchSanityData(allPostsQuery, {
    lang: locale,
  });

  console.log(postsList);

  return (
    <>
      <Hero />
      <BlogList />
    </>
  );
}
