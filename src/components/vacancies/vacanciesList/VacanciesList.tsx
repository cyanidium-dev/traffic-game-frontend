import Container from "@/components/shared/container/Container";
import { Vacancy } from "@/types/vacancy";
import VacancyCard from "./VacancyCard";

interface VacanciesListProps {
  vacanciesList: Vacancy[];
}

export default function VacanciesList({ vacanciesList }: VacanciesListProps) {
  if (!vacanciesList) return null;

  return (
    <section className="pt-[126px] pb-[61px] xl:pt-[119px] xl:pb-20">
      <Container>
        <ul className="flex flex-col sm:flex-row sm:flex-wrap gap-5 xl:gap-y-[50px]">
          {vacanciesList.map((vacancy, idx) => (
            <VacancyCard key={idx} vacancy={vacancy} />
          ))}
        </ul>
      </Container>
    </section>
  );
}
