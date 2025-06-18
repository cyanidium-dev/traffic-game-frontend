import Container from "@/components/shared/container/Container";
import { Vacancy } from "@/types/vacancy";
import { useTranslations } from "next-intl";

interface DescriptionProps {
  vacancy: Vacancy;
}

export default function Description({ vacancy }: DescriptionProps) {
  const t = useTranslations("vacancyPage");
  const { requirements, offers } = vacancy;

  return (
    <section className="pb-[61px] xl:pb-30">
      <Container className="flex flex-col gap-[84px] md:flex-row md:justify-between">
        <div>
          <h2 className="mb-6 font-actay text-[24px] font-bold leading-[120%] uppercase">
            {t("requirements")}
          </h2>
          <p className="text-[14px] font-light leading-[120%]">
            {requirements}
          </p>
        </div>
        <div>
          {" "}
          <h2 className="mb-6 font-actay text-[24px] font-bold leading-[120%] uppercase">
            {t("offers")}
          </h2>
          <p className="text-[14px] font-light leading-[120%]">{offers}</p>
        </div>
      </Container>
    </section>
  );
}
