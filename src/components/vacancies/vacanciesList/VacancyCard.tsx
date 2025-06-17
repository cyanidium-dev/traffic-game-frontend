import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Link } from "@/i18n/navigation";
import { Vacancy } from "@/types/vacancy";
import { useTranslations } from "next-intl";
import Image from "next/image";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";

interface VacancyCardProps {
  vacancy: Vacancy;
}

export default function VacancyCard({ vacancy }: VacancyCardProps) {
  const t = useTranslations("vacanciesPage");
  const { title, description, slug } = vacancy;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="relative sm:w-[calc(50%-10px)] md:w-[calc(33%-13.33px)] xl:w-[calc(25%-15px)] min-h-full rounded-[8px] overflow-hidden bg-black/26 backdrop-blur-[5px]"
    >
      <Link href={`/vacancies/${slug}`} className="block h-full">
        <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        <div className="flex flex-col justify-between h-full px-[26px] pb-[26px] pt-9">
          <div>
            <h3 className="mb-5 font-actay text-[20px] font-bold leading-[120%] uppercase line-clamp-1">
              {title}
            </h3>
            <ul className="flex flex-col gap-y-[19px] mb-8">
              {description.map((requirement, idx) => (
                <li
                  key={idx}
                  className="flex gap-x-3 items-start text-[14px] font-light leading-[120%]"
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
          <SecondaryButton>{t("button")}</SecondaryButton>
        </div>
      </Link>
    </motion.li>
  );
}
