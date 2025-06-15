import { Dispatch, SetStateAction } from "react";
import NavMenu from "./NavMenu";
import { AnimatePresence, motion } from "framer-motion";
import { burgerMenuVariants } from "@/utils/animationVariants";
import Container from "../container/Container";
import MarqueeLine from "./MarqueeLine";
import Image from "next/image";
import TrafficGame from "./TrafficGame";
import { fadeInAnimation } from "@/utils/animationVariants";

interface BurgerMenuMobTabProps {
  isHeaderMenuOpened: boolean;
  setIsHeaderMenuOpened: Dispatch<SetStateAction<boolean>>;
}

export default function BurgerMenu({
  isHeaderMenuOpened,
  setIsHeaderMenuOpened,
}: BurgerMenuMobTabProps) {
  return (
    <AnimatePresence>
      {isHeaderMenuOpened && (
        <motion.div
          viewport={{ once: true, amount: 0.2 }}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={burgerMenuVariants}
          className={`${
            isHeaderMenuOpened ? "no-doc-scroll" : ""
          } md:hidden absolute z-50 top-0 right-0 w-[100vw] h-[100dvh] bg-black overflow-hidden`}
        >
          <div className="absolute top-0 left-0 pointer-events-none">
            <Image
              src="/images/header/burger/figure.svg"
              width="223"
              height="809"
              alt="background"
            />
          </div>
          <div className="absolute -z-10 top-[-68px] left-[50px] pointer-events-none">
            <TrafficGame />
          </div>
          <div className="flex flex-col gap-y-16 justify-between w-[100vw] h-[calc(100dvh-88px)] mt-22 pt-[130px] pb-[42px] overflow-y-auto overflow-x-hidden">
            <Container className="w-full">
              <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeInAnimation({ delay: 0.3, x: 30 })}
              >
                <NavMenu setIsHeaderMenuOpened={setIsHeaderMenuOpened} />
              </motion.div>
            </Container>
            <motion.div
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeInAnimation({ delay: 0.9, x: 30 })}
            >
              <MarqueeLine />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
