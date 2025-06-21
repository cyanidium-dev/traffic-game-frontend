import Container from "@/components/shared/container/Container";
import { Post } from "@/types/post";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

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
            <motion.li
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInAnimation({ y: 30, scale: 0.95 })}
              key={idx}
            >
              <p className="text-[16px] font-light leading-[130%]">
                {paragraph}
              </p>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
