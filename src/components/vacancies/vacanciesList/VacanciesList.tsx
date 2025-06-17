import { Vacancy } from "@/types/vacancy";

interface VacanciesListProps {
  vacanciesList: Vacancy[];
}

export default function VacanciesList({ vacanciesList }: VacanciesListProps) {
  if (!vacanciesList) return null;

  return <section>VacanciesList</section>;
}
