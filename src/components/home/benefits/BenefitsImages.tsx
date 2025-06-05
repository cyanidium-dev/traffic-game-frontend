import Image from "next/image";
import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function BenefitsImages() {
  return (
    <>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2 })}
        className="md:hidden absolute top-0 left-0"
      >
        <Image
          src="/images/home/benefits/figureTopMob.svg"
          alt="background"
          width="252"
          height="532"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2 })}
        className="md:hidden absolute bottom-0 right-0"
      >
        <Image
          src="/images/home/benefits/figureBottomMob.svg"
          alt="background"
          width="252"
          height="532"
        />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2 })}
        className="hidden md:block absolute bottom-0 left-0"
      >
        <Image
          src="/images/home/benefits/figureLeftDesk.svg"
          alt="background"
          width="562"
          height="311"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInAnimation({ delay: 1.2 })}
        className="hidden md:block absolute bottom-0 right-0"
      >
        <Image
          src="/images/home/benefits/figureRightDesk.svg"
          alt="background"
          width="541"
          height="311"
        />
      </motion.div>
    </>
  );
}
