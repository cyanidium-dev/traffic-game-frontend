import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import OffersList from "./OffersList";
import JoinUs from "../../shared/joinUs/JoinUs";

export default function Offers() {
  const t = useTranslations("homePage.offers");

  return (
    <section className="pt-[202px] pb-[127px] xl:pt-[642px] xl:pb-[225px]">
      <Container>
        <div className="max-w-[214px] md:max-w-[300px] xl:max-w-[442px] mx-auto md:ml-auto md:mr-0">
          <SectionTitle className="max-w-[214px] xl:max-w-[442px] mb-150 md:mb-9 text-[48px] xl:text-[94px] text-center md:text-left">
            {t("title")}
          </SectionTitle>
          <div className="hidden md:flex max-w-[214px] md:max-w-[300px] xl:max-w-[418px]">
            <JoinUs buttonText={t("button")} />
          </div>
        </div>
        <OffersList />
      </Container>
    </section>
  );
}
