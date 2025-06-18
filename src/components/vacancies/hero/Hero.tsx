import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import MarqueeLine from "./MarqueeLine";
import PageTitle from "@/components/shared/titles/PageTitle";

export default function Hero() {
  const t = useTranslations("vacanciesPage");

  return (
    <section className="pt-[154px] xl:pt-[174px]">
      <Container className="flex flex-col md:flex-row md:justify-between gap-y-[49px] mb-[367px] md:mb-[50px]">
        <PageTitle className="max-w-[257px] xl:max-w-[511px] text-[48px] xl:text-[96px]">
          {t("title")}
        </PageTitle>
        <p className="max-w-[231px] ml-auto md:ml-0 text-[14px] font-light leading-[120%] text-right md:text-left">
          {t("description")}
        </p>
      </Container>
      <MarqueeLine />
    </section>
  );
}
