"use client";
import { Link } from "@/i18n/navigation";

interface NavMenuItemProps {
  menuItem: { title: string; link: string };
}

export default function NavMenuItem({ menuItem }: NavMenuItemProps) {
  const { title, link } = menuItem;

  return (
    <li>
      <Link
        href={link}
        className="block font-actay text-[12px] font-bold uppercase
        leading-[120%] xl:hover:text-main focus-visible:text-main transition duration-300 ease-in-out"
      >
        {title}
      </Link>
    </li>
  );
}
