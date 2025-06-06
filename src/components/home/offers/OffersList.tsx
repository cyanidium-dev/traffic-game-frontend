import { useTranslations } from "next-intl";
import * as motion from "motion/react-client";
import { listVariants, listItemVariants } from "@/utils/animationVariants";

export default function OffersList() {
  const t = useTranslations("homePage.offers");

  const offersList = [t("budgets"), t("rate"), t("brands"), t("tools")];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({
        staggerChildren: 0.4,
        delayChildren: 0.8,
      })}
      className="flex flex-col gap-y-9 max-w-[255px] md:-mt-[165px]"
    >
      {offersList.map((offer, idx) => (
        <motion.li
          viewport={{ once: true, amount: 0.2 }}
          variants={listItemVariants}
          key={idx}
          className="font-actay text-[20px] font-bold uppercase whitespace-pre-line leading-[108%]"
        >
          {offer}
        </motion.li>
      ))}
    </motion.ul>
  );
}
