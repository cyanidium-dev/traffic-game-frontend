import { useTranslations } from "next-intl";
import Container from "../container/Container";
import Logo from "../logo/Logo";
import Socials from "./Socials";
import Contacts from "./Contacts";
import NavMenu from "./NavMenu";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="pt-[99px] xl:pt-[214px] pb-8 xl:pb-25">
      <Container>
        <div className="md:flex justify-between">
          <div className="mb-[54px] md:mb-[68px]">
            <Logo className="mb-3 text-[14px]" />
            <p className="mb-[43px] max-w-[195px] text-[12px] font-light leading-[120%]">
              {t("description")}
            </p>
            <Socials />
          </div>
          <div className="sm:flex md:gap-8 lg:gap-x-[76px] sm:justify-between">
            <Contacts />
            <NavMenu />
          </div>
        </div>
        <div className="flex flex-col gap-y-3 sm:flex-row sm:justify-between">
          <p className="text-[16px] font-normal leading-[180%]">
            {t("rights")}
          </p>
          <p className="text-[14px] font-light leading-[206%] text-main-light">
            {t("developedBy.partOne")}
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="xl:hover:text-main focus-visible:text-main transition duration-300 ease-in-out"
            >
              {t("developedBy.partTwo")}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
