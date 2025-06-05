"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function MarqueeLine() {
  return (
    <Marquee
      autoFill={true}
      speed={100}
      className="min-w-[130vw] -ml-[1vw] h-[58px] xl:h-[115px] rotate-[4deg] xl:rotate-[-2.8deg] bg-white"
    >
      <Image
        src="/images/home/partners/pariMatch.webp"
        alt="pari match"
        width={154}
        height={59}
        className="w-auto h-[30px] xl:h-[60px] mx-[14px] xl:mx-[29px] rotate-[2.8deg] xl:rotate-[2.8deg]"
      />
      <Image
        src="/images/home/partners/pinUp.webp"
        alt="pin up"
        width={222}
        height={67}
        className="w-auto h-[30px] xl:h-[60px] mx-[14px] xl:mx-[29px] rotate-[2.8deg] xl:rotate-[2.8deg]"
      />
      <Image
        src="/images/home/partners/mostbet.webp"
        alt="mostbet"
        width={320}
        height={72}
        className="w-auto h-[30px] xl:h-[60px] mx-[14px] xl:mx-[29px] rotate-[2.8deg] xl:rotate-[2.8deg]"
      />
      <Image
        src="/images/home/partners/1xbet.webp"
        alt="1xbet"
        width={196}
        height={66}
        className="w-auto h-[30px] xl:h-[60px] mx-[14px] xl:mx-[29px] rotate-[2.8deg] xl:rotate-[2.8deg]"
      />
      <Image
        src="/images/home/partners/1w.webp"
        alt="1w"
        width={122}
        height={62}
        className="w-auto h-[30px] xl:h-[60px] mx-[14px] xl:mx-[29px] rotate-[2.8deg] xl:rotate-[2.8deg]"
      />
    </Marquee>
  );
}
