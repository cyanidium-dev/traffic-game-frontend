import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";
import VacanciesList from "./VacanciesList";
import { Vacancy } from "@/types/vacancy";

interface VacanciesProps {
  vacanciesList: Vacancy[];
}

export default function Vacancies({ vacanciesList }: VacanciesProps) {
  const t = useTranslations("homePage.vacancies");

  return (
    <section className="pt-[58px] xl:pt-[311px]">
      <Container>
        <SectionTitle className="max-w-[263px] xl:max-w-[531px] md:mx-auto text-[64px] xl:text-[120px]">
          {t("title")}
        </SectionTitle>
        <div className="hidden md:block">
          {" "}
          <VacanciesList vacanciesList={vacanciesList} />
        </div>
      </Container>
      <div className="md:hidden">
        {" "}
        <VacanciesList vacanciesList={vacanciesList} />
      </div>
    </section>
  );
}
