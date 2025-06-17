"use client";
import { useTranslations } from "next-intl";
import Marquee from "react-fast-marquee";

export default function MarqueeLine() {
  const t = useTranslations("homePage.hero");

  return (
    <Marquee
      autoFill={true}
      speed={100}
      className="min-w-[110vw] rotate-[2.98deg] md:rotate-[-3deg] bg-[linear-gradient(90deg,_#F80498_30.2%,_#920259_59.69%)] text-black"
    >
      <span className="inline-block mt-2 mx-[7.5px] font-actay text-[36px] font-bold leading-none uppercase">
        {t("betting")}
      </span>
      <span className="inline-block mt-2 mx-[7.5px] font-actay text-[36px] font-bold leading-none uppercase">
        {t("crypto")}
      </span>
      <span className="inline-block mt-2 mx-[7.5px] font-actay text-[36px] font-bold leading-none uppercase">
        {t("gambling")}
      </span>
    </Marquee>
  );
}
