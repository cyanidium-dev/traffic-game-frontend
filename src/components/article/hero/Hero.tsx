import Container from "@/components/shared/container/Container";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import { Post } from "@/types/post";
import Image from "next/image";

interface HeroProps {
  article: Post;
}

export default function Hero({ article }: HeroProps) {
  const { image, title, description } = article;

  return (
    <section className="relative w-full pt-[176px] xl:pt-[171px] pb-21 xl:pb-[78px]">
      <Image
        src={image}
        fill
        alt="article image"
        sizes="100vw"
        priority
        className="-z-10 object-cover rounded-b-[8px]"
      />
      <Container>
        <h1 className="md:max-w-[427px] mb-5 font-actay text-[36px] xl:text-[40px] font-bold leading-[120%] uppercase">
          {title}
        </h1>
        <p className="md:max-w-[573px] mb-8 text-[14px] font-light leading-[120%]">
          {description}
        </p>
        <EstimatedReadingTime post={article} />
      </Container>
    </section>
  );
}
