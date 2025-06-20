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
          className="object-cover blur-[71px]"
        />
      </div>
      <div className="hidden md:block absolute -z-20 top-[0px] left-[-306px] w-[480px] h-[436px]">
        <Image
          src="/images/article/ellipseDesk.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[84px]"
        />
      </div>

      <div className="md:hidden absolute z-30 bottom-[-231px] left-[calc(50%-658px)] w-[1315px] h-[306px]">
        <Image
          src="/images/article/ellipseBlackMob.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[17px]"
        />
      </div>
      <div className="hidden md:block absolute -z-10 bottom-[-765px] left-[calc(50%-1282px)] w-[2564px] h-[699px]">
        <Image
          src="/images/article/ellipseBlackDesk.svg"
          alt="background"
          fill
          sizes="25vw"
          className="object-cover blur-[44px]"
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
        className="absolute -z-20 top-[-220px] left-[-52px] pointer-events-none"
      >
        <TrafficGame className="max-w-[321px] text-[102px] rotate-[-10deg] bg-[linear-gradient(230deg,_#121212_20.29%,_#B00F74_95.97%)]" />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
        className="absolute z-10 top-[73px] left-[calc(50%-112px)] w-[450px] h-[582px] pointer-events-none"
      >
        <Image
          src="/images/article/ctaImageMob.webp"
          alt="background"
          width={408}
          height={525}
          className="object-cover"
        />
      </motion.div>
    </>
  );
}
