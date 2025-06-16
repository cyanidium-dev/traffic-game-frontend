import MainButton from "@/components/shared/buttons/MainButton";
import { useTranslations } from "next-intl";

export default function JoinUs() {
  const t = useTranslations("homePage.hero");

  return (
    <>
      <MainButton> {t("button")}</MainButton>
    </>
  );
}
