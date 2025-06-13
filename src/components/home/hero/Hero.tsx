import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { useTranslations } from "next-intl";
import MarqueeLine from "./MarqueeLine";

export default function Hero() {
  const t = useTranslations("homePage.hero");

  return (
    <section className="relative pt-11 pb-9 md:pt-[30px] md:pb-[524px]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 1.4 })}
        className="absolute z-10 md:-z-10 top-3 md:top-[705px] xl:top-[825px] left-[-1vw] md:left-[-3vw] w-full h-[27px] xl:h-[50px]"
      >
        <MarqueeLine />
      </motion.div>
      <Container className="md:flex md:justify-between">
        <SectionTitle className="max-w-[311px] xl:max-w-[624px] mx-auto md:mx-0 mb-3 xl:mb-0 text-[64px] xl:text-[129px] text-center md:text-left">
          {t("title")}
        </SectionTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInAnimation({ y: 30, delay: 1 })}
          className="md:max-w-[251px]"
        >
          <h1 className="mb-[368px] md:mb-7 text-[14px] font-light text-center md:text-left">
            {t("description")}
          </h1>
          <MainButton> {t("button")}</MainButton>
        </motion.div>
      </Container>
    </section>
  );
}
