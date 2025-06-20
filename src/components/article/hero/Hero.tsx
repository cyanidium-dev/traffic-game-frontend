"use client";
import Container from "@/components/shared/container/Container";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import { Post } from "@/types/post";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

interface HeroProps {
  article: Post;
}

export default function Hero({ article }: HeroProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Паралакс-значення
  const y1 = useParallax(scrollYProgress, 280);
  const { image, title, description } = article;

  return (
    <section
      ref={ref}
      className="relative w-full pt-[176px] xl:pt-[171px] pb-21 xl:pb-[78px] overflow-hidden"
    >
      <motion.div
        style={{ y: y1 }}
        className="absolute -z-10 top-[-35px] left-0 w-full h-full"
      >
        <Image
          src={image}
          fill
          alt="article image"
          sizes="100vw"
          priority
          className="-z-10 object-cover rounded-b-[8px]"
        />
      </motion.div>
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
