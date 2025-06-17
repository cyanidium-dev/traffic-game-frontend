"use client";
import Container from "@/components/shared/container/Container";
import { Vacancy } from "@/types/vacancy";
import VacancyCard from "./VacancyCard";
import Pagination from "@/components/shared/pagination/Pagination";
import { useVacanciesItemsPerPage } from "@/hooks/useVacanciesItemsPerPage";
import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";

interface VacanciesListProps {
  vacanciesList: Vacancy[];
}

export default function VacanciesList({ vacanciesList }: VacanciesListProps) {
  const SECTION_ID = "vacancies-page-vacancies-list";

  if (!vacanciesList) return null;

  return (
    <section
      id={SECTION_ID}
      className="pt-[126px] pb-[61px] xl:pt-[119px] xl:pb-20"
    >
      <Container>
        <Pagination
          items={vacanciesList}
          scrollTargetId={SECTION_ID}
          useItemsPerPage={useVacanciesItemsPerPage}
          renderItems={(currentItems) => (
            <motion.ul
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.2 }}
              variants={listVariants({
                staggerChildren: 0.3,
                delayChildren: 0.4,
              })}
              id={SECTION_ID}
              className="flex flex-col sm:flex-row sm:flex-wrap gap-5 xl:gap-y-[50px]"
            >
              {currentItems.map((vacancy) => (
                <VacancyCard key={vacancy.id} vacancy={vacancy} />
              ))}
            </motion.ul>
          )}
        />
      </Container>
    </section>
  );
}
