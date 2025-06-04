import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations("header");

  return (
    <Link
      href="/"
      className="font-actay text-[12px] font-bold uppercase animate-text-glow"
    >
      {t("logo")}
    </Link>
  );
}
