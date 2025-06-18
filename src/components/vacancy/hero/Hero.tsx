import PageTitle from "@/components/shared/titles/PageTitle";
import Container from "@/components/shared/container/Container";
import { Vacancy } from "@/types/vacancy";
import JoinUs from "@/components/shared/joinUs/JoinUs";
import { useTranslations } from "next-intl";

interface HeroProps {
  vacancy: Vacancy;
}

export default function Hero({ vacancy }: HeroProps) {
  const t = useTranslations("vacancyPage");

  const { title } = vacancy;

  return (
    <section className="pt-[375px] xl:pt-[174px] pb-30 xl:pb-[110px]">
      <Container>
        <PageTitle className="mb-5 xl:mb-6 mx-auto md:mx-0 md:max-w-[644px]">
          {title}
        </PageTitle>
        <div className="max-w-[360px] md:max-w-[249px] mx-auto md:mx-0">
          <JoinUs title={t("title")} buttonText={t("button")} />
        </div>
      </Container>
    </section>
  );
}
