import { Vacancy } from "@/types/vacancy";
import VacancyTitle from "./VacancyTitle";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface VacanciesListProps {
  vacanciesList: Vacancy[];
}

export default function VacanciesList({ vacanciesList }: VacanciesListProps) {
  const t = useTranslations("homePage.vacancies");

  if (!vacanciesList) return null;

  const homeVacancies = vacanciesList.slice(0, 3);

  return (
    <ul className="pt-[594px] md:pt-0">
      {/* Перший елемент */}
      <li className="mb-[55px]">
        <VacancyTitle position="right" className="mb-[38px]">
          {homeVacancies[0].title}
        </VacancyTitle>
        <div className="relative rounded-[8px] w-[235px] pl-[70px] pr-[38px] pt-6 min-h-[556px] -ml-[45px] overflow-hidden">
          <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
          <h4 className="mb-6 font-actay text-[16px] font-medium leading-[120%] uppercase">
            {t("requirements")}
          </h4>
          <ul className="flex flex-col gap-y-[19px] mb-8">
            {homeVacancies[0].description.map((requirement, idx) => (
              <li
                key={idx}
                className="flex gap-x-3 items-center text-[14px] font-light leading-[120%]"
              >
                <Image
                  src="/images/vacancies/vacanciesList/star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
                <p>{requirement}</p>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Другий елемент */}
      <li className="mb-[440px]">
        <VacancyTitle position="left" className="mb-[52px]">
          {homeVacancies[1].title}
        </VacancyTitle>
        <div className="relative rounded-[8px] w-[346px] pl-[62px] pr-[102px] pt-9 min-h-[383px] ml-auto mr-[-81px] overflow-hidden">
          <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
          <h4 className="mb-6 font-actay text-[16px] font-medium leading-[120%] uppercase">
            {t("requirements")}
          </h4>
          <ul className="flex flex-col gap-y-[19px] mb-8">
            {homeVacancies[0].description.map((requirement, idx) => (
              <li
                key={idx}
                className="flex gap-x-3 items-center text-[14px] font-light leading-[120%]"
              >
                <Image
                  src="/images/vacancies/vacanciesList/star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
                <p>{requirement}</p>
              </li>
            ))}
          </ul>
        </div>
      </li>

      {/* Третій елемент */}
      <li>
        <VacancyTitle position="center" className="mb-[66px]">
          {homeVacancies[2].title}
        </VacancyTitle>
        <div className="relative rounded-[8px] w-[310px] px-16 pt-9 min-h-[368px] mx-auto overflow-hidden">
          <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
          <h4 className="mb-6 font-actay text-[16px] font-medium leading-[120%] uppercase">
            {t("requirements")}
          </h4>
          <ul className="flex flex-col gap-y-[19px] mb-8">
            {homeVacancies[0].description.map((requirement, idx) => (
              <li
                key={idx}
                className="flex gap-x-3 items-center text-[14px] font-light leading-[120%]"
              >
                <Image
                  src="/images/vacancies/vacanciesList/star.svg"
                  alt="star"
                  width={16}
                  height={16}
                />
                <p>{requirement}</p>
              </li>
            ))}
          </ul>
        </div>
      </li>
    </ul>
  );
}
