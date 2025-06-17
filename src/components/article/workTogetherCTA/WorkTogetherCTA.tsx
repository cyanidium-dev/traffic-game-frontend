import MainButton from "@/components/shared/buttons/MainButton";
import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function WorkTogetherCTA() {
  const t = useTranslations("articlePage.workTogetherCta");

  return (
    <section className="pt-[278px] xl:pt-[267px]">
      <Container>
        <SectionTitle className="max-w-[283px] xl:max-w-[376px] mb-[284px] md:mb-8 text-[48px] xl:text-[64px]">
          {t("title")}
        </SectionTitle>
        <Link href="/vacancies">
          <MainButton>{t("button")}</MainButton>
        </Link>
      </Container>
    </section>
  );
}
