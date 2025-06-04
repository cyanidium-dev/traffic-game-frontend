import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations("header");

  return (
    <Link
      href="/"
      className="font-actay text-[12px] font-bold uppercase leading-[0] 
    bg-gradient-to-tr from-white via-white to-[#FFB5E6] 
    bg-clip-text text-transparent 
    [text-shadow:3.508px_2.923px_8.916px_rgba(255,0,166,0.2)]"
    >
      {t("logo")}
    </Link>
  );
}
