import Container from "@/components/shared/container/Container";
import { Post } from "@/types/post";
import BlogCard from "./BlogCard";

interface BlogListProps {
  postsList: Post[];
}

export default function BlogList({ postsList }: BlogListProps) {
  return (
    <section>
      <Container>
        <ul className="flex flex-col gap-5 sm:flex-row sm:flex-wrap">
          {postsList.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
