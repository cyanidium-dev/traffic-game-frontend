import Container from "@/components/shared/container/Container";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import { Post } from "@/types/post";
import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

interface HeroProps {
  article: Post;
}

export default function Hero({ article }: HeroProps) {
  const { image, title, description } = article;

  return (
    <section className="relative w-full pt-[176px] xl:pt-[171px] pb-21 xl:pb-[78px] overflow-hidden">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({})}
        className="absolute -z-10 top-[-60px] xl:top-[-40px] left-0 w-full h-full"
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
        <motion.h1
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ x: 30, scale: 0.96 })}
          className="md:max-w-[427px] mb-5 font-actay text-[36px] xl:text-[40px] font-bold leading-[120%] uppercase"
        >
          {title}
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ x: -30, scale: 0.96, delay: 0.4 })}
          className="md:max-w-[573px] mb-8 text-[14px] font-light leading-[120%]"
        >
          {description}
        </motion.p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({ y: 10, delay: 0.8, scale: 0.97 })}
        >
          <EstimatedReadingTime post={article} />
        </motion.div>
      </Container>
    </section>
  );
}
