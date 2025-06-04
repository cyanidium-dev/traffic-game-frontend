import { useTranslations } from "next-intl";
import NavMenuItem from "./NavMenuItem";

export default function NavMenu() {
  const t = useTranslations("header");

  const navMenuList = [
    { title: t("home"), link: "/" },
    { title: t("vacancies"), link: "/vacancies" },
    { title: t("blog"), link: "/blog" },
    { title: t("contacts"), link: "/contacts" },
  ];

  return (
    <ul className="hidden md:flex items-center gap-x-4">
      {navMenuList.map((menuItem, idx) => (
        <NavMenuItem key={idx} menuItem={menuItem} />
      ))}
    </ul>
  );
}
