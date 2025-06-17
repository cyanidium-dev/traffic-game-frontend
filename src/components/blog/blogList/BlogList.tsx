"use client";
import Container from "@/components/shared/container/Container";
import { Post } from "@/types/post";
import BlogCard from "./BlogCard";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import Pagination from "@/components/shared/pagination/Pagination";
import { usePostsItemsPerPage } from "@/hooks/usePostsItemsPerPage";

interface BlogListProps {
  postsList: Post[];
}

export default function BlogList({ postsList }: BlogListProps) {
  const SECTION_ID = "blog-page-posts-list";

  if (!postsList) return null;

  return (
    <section id={SECTION_ID}>
      <Container>
        <Pagination
          items={postsList}
          scrollTargetId={SECTION_ID}
          useItemsPerPage={usePostsItemsPerPage}
          renderItems={(currentItems) => (
            <motion.ul
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={listVariants({
                staggerChildren: 0.3,
                delayChildren: 0.4,
              })}
              id={SECTION_ID}
              className="flex flex-col gap-5 xl:gap-y-12 sm:flex-row sm:flex-wrap"
            >
              {currentItems.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </motion.ul>
          )}
        />
      </Container>
    </section>
  );
}
