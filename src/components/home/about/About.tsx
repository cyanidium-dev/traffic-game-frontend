import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { useTranslations } from "next-intl";
import ServicesList from "./ServicesList";
import MarqueeLine from "./MarqueeLine";

export default function About() {
  const t = useTranslations("homePage.about");

  return (
    <section className="pt-[217px] xl:pt-[190px]">
      <Container className="mb-[138px] xl:mb-[79px]">
        <div className="md:flex md:flex-row-reverse md:justify-between mb-[196px] md:mb-[75px]">
          <SectionTitle className="max-w-[262px] xl:max-w-[524px] mx-auto md:mx-0 mb-8 md:mb-0 text-[48px] xl:text-[96px] text-center md:text-right">
            {t("title")}
          </SectionTitle>
          <motion.p
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeInAnimation({ x: -100, delay: 1 })}
            className="md:max-w-[251px] text-[14px] font-light leading-[120%]"
          >
            {t("description")}
          </motion.p>
        </div>
        <ServicesList />
      </Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.4 })}
        className="ml-[-1vw] md:ml-[-3vw] w-full h-[50px]"
      >
        <MarqueeLine />
      </motion.div>
    </section>
  );
}
