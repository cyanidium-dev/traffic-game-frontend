import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";
import TrafficGame from "@/components/shared/trafficGame/TrafficGame";

export default function CTAImages() {
  return (
    <>
      <div className="md:hidden absolute -z-20 top-[-422px] left-[-291px] w-[407px] h-[369px]">
        <Image
          src="/images/article/ellipseMob.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[71px] supports-[backdrop-filter]:blur-[71px] will-change-transform"
        />
      </div>
      <div className="hidden md:block absolute -z-20 top-[0px] left-[-306px] w-[480px] h-[436px]">
        <Image
          src="/images/article/ellipseDesk.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[84px]  supports-[backdrop-filter]:blur-[84px] will-change-transform"
        />
      </div>

      <div className="md:hidden absolute z-30 bottom-[-231px] left-[calc(50%-658px)] w-[1315px] h-[306px]">
        <Image
          src="/images/article/ellipseBlackMob.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[17px] supports-[backdrop-filter]:blur-[17px] will-change-transform"
        />
      </div>
      <div className="hidden md:block absolute z-30 bottom-[-415px] xl:bottom-[-555px] left-[calc(50%-1282px)] w-[2564px] h-[329px] xl:h-[529px]">
        <Image
          src="/images/article/ellipseBlackDesk.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[44px] supports-[backdrop-filter]:blur-[44px] will-change-transform"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
        className="absolute -z-20 top-[-220px] md:top-[305px] left-[-52px] md:left-[-11px] pointer-events-none"
      >
        <TrafficGame className="max-w-[321px] text-[102px] md:text-[121px] rotate-[-10deg] bg-[linear-gradient(230deg,_#121212_20.29%,_#B00F74_95.97%)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
        className="md:hidden absolute z-10 top-[73px] left-[calc(50%-112px)] w-[450px] h-[582px] pointer-events-none"
      >
        <Image
          src="/images/article/ctaImageMob.webp"
          alt="background"
          width={408}
          height={525}
          className="object-cover"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
        className="hidden md:block absolute -z-10 top-[-362px] xl:top-[-242px] left-[calc(50%-135px)] w-[811px] h-[1050px] pointer-events-none"
      >
        <TrafficGame className="absolute -z-20 top-[86px] left-[-21px] max-w-[379px] md:text-[121px] rotate-[30deg] bg-[linear-gradient(96deg,_#121212_3.75%,_#B00F74_95.63%)]" />
        <Image
          src="/images/article/ctaImageDesk.webp"
          alt="background"
          width={811}
          height={1050}
          className="object-cover"
        />
      </motion.div>
    </>
  );
}
