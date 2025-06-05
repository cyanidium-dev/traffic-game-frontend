import { Link } from "@/i18n/navigation";
import InstagramIcon from "../icons/InstagramIcin";
import LinkedinIcon from "../icons/LinkedinIcon";
import TelegramIcon from "../icons/TelegramIcon";
import TiktokIcon from "../icons/TiktokIcon";

export default function Socials() {
  const socialsList = [
    { icon: <LinkedinIcon />, url: "/" },
    { icon: <InstagramIcon />, url: "/" },
    { icon: <TelegramIcon />, url: "/" },
    { icon: <TiktokIcon />, url: "/" },
  ];

  return (
    <ul className="flex items-center gap-x-5 mb-[43px] md:mb-0">
      {socialsList.map(({ icon, url }, idx) => (
        <li key={idx}>
          <Link
            href={url}
            className="xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  );
}
