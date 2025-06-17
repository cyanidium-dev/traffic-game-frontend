import Container from "@/components/shared/container/Container";
import { Post } from "@/types/post";

interface DescriptionProps {
  article: Post;
}

export default function Description({ article }: DescriptionProps) {
  const { text } = article;

  if (!text || !text?.length) return null;

  return (
    <section className="pt-[111px] xl:pt-[83px]">
      <Container>
        <ul className="flex flex-col gap-y-10 xl:gap-y-[70px]">
          {text.map((paragraph, idx) => (
            <li key={idx}>
              <p className="text-[16px] font-light leading-[130%]">
                {paragraph}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
