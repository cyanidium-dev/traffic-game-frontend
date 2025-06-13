import * as motion from "motion/react-client";
import { listItemVariantsLeft } from "@/utils/animationVariants";

interface ServiceCardProps {
  service: { title: string; description: string };
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const { title, description } = service;

  return (
    <motion.li
      variants={listItemVariantsLeft}
      className="p-[3px] bg-[linear-gradient(93.51deg,_#FFFFFF_2.88%,_#121212_88%)] rounded-[8px] md:first:w-full md:w-[calc(50%-10px)]"
    >
      <div className="bg-black py-8 px-9 rounded-[8px]">
        <h3 className="mb-[51px] font-guano-apes text-[48px] font-medium uppercase">
          {title}
        </h3>
        <p className="max-w-[367px] text-[14px] font-light leading-[120%]">
          {description}
        </p>
      </div>
    </motion.li>
  );
}
