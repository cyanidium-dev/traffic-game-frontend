import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import CTAImages from "./CTAImages";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function WorkTogetherCTA() {
  const t = useTranslations("articlePage.workTogetherCta");

  return (
    <section className="pt-[278px] xl:pt-[267px] pb-[61px] xl:pb-[292px]">
      <Container className="relative">
        <CTAImages />
        <SectionTitle className="max-w-[293px] xl:max-w-[386px] mb-[284px] md:mb-8 text-[48px] xl:text-[64px]">
          {t("title")}
        </SectionTitle>
        <motion.div
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeInAnimation({
            y: 30,
            delay: 1.6,
            scale: 0.9,
            duration: 0.7,
          })}
          className="relative z-40 block max-w-[328px] mx-auto md:mx-0"
        >
          <Link href="/vacancies">
            <MainButton>{t("button")}</MainButton>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
