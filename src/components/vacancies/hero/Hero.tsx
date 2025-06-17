import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/sectionTitle/SectionTitle";
import { useTranslations } from "next-intl";
import MarqueeLine from "./MarqueeLine";

export default function Hero() {
  const t = useTranslations("vacanciesPage");

  return (
    <section className="pt-[154px] xl:pt-[174px]">
      <Container className="flex flex-col md:flex-row md:justify-between gap-y-[49px] mb-[367px] md:mb-[50px]">
        <SectionTitle className="max-w-[257px] xl:max-w-[511px] text-[48px] xl:text-[96px]">
          {t("title")}
        </SectionTitle>
        <p className="max-w-[231px] ml-auto md:ml-0 text-[14px] font-light leading-[120%] text-right md:text-left">
          {t("description")}
        </p>
      </Container>
      <MarqueeLine />
    </section>
  );
}
