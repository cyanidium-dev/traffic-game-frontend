import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("blogPage");

  return (
    <section className="pt-[340px] pb-[255px] xl:pt-[137px] xl:pb-[330px]">
      <Container>
        <div className="flex flex-col gap-y-5 md:flex-row-reverse md:justify-between">
          <SectionTitle className="md:max-w-[155px] xl:max-w-[305px] mx-auto md:mx-0 text-[48px] xl:text-[96px] text-center md:text-left">
            {t("title")}
          </SectionTitle>
          <p className="max-w-[248px] mx-auto md:mx-0 md:mt-6 xl:mt-[46px] text-[14px] font-light leading-[120%] text-center md:text-left">
            {t("description")}
          </p>
        </div>
      </Container>
    </section>
  );
}
