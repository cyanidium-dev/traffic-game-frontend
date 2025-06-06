import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { useTranslations } from "next-intl";
import OffersList from "./OffersList";

export default function Offers() {
  const t = useTranslations("homePage.offers");

  return (
    <section className="pt-[202px] pb-[127px] xl:pt-[642px] xl:pb-[225px]">
      <Container>
        <div className="max-w-[214px] md:max-w-[300px] xl:max-w-[442px] mx-auto md:ml-auto md:mr-0">
          <SectionTitle className="max-w-[214px] xl:max-w-[442px] mb-150 md:mb-9 text-[48px] xl:text-[94px] text-center md:text-left">
            {t("title")}
          </SectionTitle>
          <motion.div
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInAnimation({ scale: 0.9, delay: 2.4 })}
            className="hidden md:flex max-w-[214px] md:max-w-[300px] xl:max-w-[418px]"
          >
            <MainButton>{t("button")}</MainButton>
          </motion.div>
        </div>
        <OffersList />
      </Container>
    </section>
  );
}
