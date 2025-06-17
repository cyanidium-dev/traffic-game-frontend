import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function WorkTogetherCTA() {
  const t = useTranslations("articlePage.workTogetherCta");

  return (
    <section className="pt-[278px] xl:pt-[267px] pb-[61px] xl:pb-[292px]">
      <Container>
        <SectionTitle className="max-w-[293px] xl:max-w-[386px] mb-[284px] md:mb-8 text-[48px] xl:text-[64px]">
          {t("title")}
        </SectionTitle>
        <Link href="/vacancies" className="block max-w-[328px] mx-auto md:mx-0">
          <MainButton>{t("button")}</MainButton>
        </Link>
      </Container>
    </section>
  );
}
