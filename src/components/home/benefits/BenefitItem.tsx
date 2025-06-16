"use client";
import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { listItemVariants } from "@/utils/animationVariants";

interface BenefitItemProps {
  benefit: {
    value: string;
    description: string;
  };
}

export default function BenefitItem({ benefit }: BenefitItemProps) {
  const { value, description } = benefit;

  const number = parseFloat(value.replace(/[^\d.]/g, ""));
  const suffix = value.replace(/[\d.]/g, "");

  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    value.includes(".") ? latest.toFixed(1) : Math.round(latest).toString()
  );

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (inView) {
      const controls = animate(count, number, {
        duration: 3.8,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [inView, count, number]);

  return (
    <motion.li
      ref={ref}
      variants={listItemVariants}
      className="flex flex-col justify-center items-center md:w-1/3 p-5 rounded-[8px] border-3 border-white"
    >
      <p className="mb-3 xl:mb-4 font-guano-apes text-[96px] xl:text-[124px] font-medium uppercase">
        <motion.span>{rounded}</motion.span>
        {suffix}
      </p>
      <p className="font-actay text-[14px] font-bold uppercase text-center">
        {description}
      </p>
    </motion.li>
  );
}
