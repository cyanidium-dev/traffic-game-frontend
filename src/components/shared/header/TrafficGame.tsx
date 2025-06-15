import * as motion from "motion/react-client";
import { fadeInAnimation } from "@/utils/animationVariants";

export default function TrafficGame() {
  return (
    <motion.p
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.1 }}
      variants={fadeInAnimation({ delay: 0.6, scale: 0.9 })}
      className="font-guano-apes text-[77px] font-normal leading-[120%] uppercase rotate-[-10deg] bg-clip-text text-transparent bg-[linear-gradient(241deg,_#4A0631_55.77%,_#111_95.53%)]"
    >
      Traffic game
    </motion.p>
  );
}
