import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import MarqueeLine from "./MarqueeLine";

export default function Partners() {
  const t = useTranslations("homePage.partners");

  return (
    <section className="pt-[127px] xl:pt-[201px]">
      <Container>
        <SectionTitle className="max-w-[307px] xl:max-w-[624px] mb-[203px] xl:mb-10 mx-auto md:mx-0 text-[48px] xl:text-[96px] text-center md:text-left">
          {t("title")}
        </SectionTitle>
      </Container>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 0.4 })}
      >
        <MarqueeLine />
      </motion.div>
    </section>
  );
}
