import * as motion from "motion/react-client";
import { listVariants } from "@/utils/animationVariants";
import { useTranslations } from "next-intl";
import ServiceCard from "./ServiceCard";

export default function ServicesList() {
  const t = useTranslations("homePage.about");

  const servicesList = [
    { title: t("betting.title"), description: t("betting.description") },
    { title: t("crypto.title"), description: t("crypto.description") },
    { title: t("gambling.title"), description: t("gambling.description") },
  ];

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: true, amount: 0.2 }}
      variants={listVariants({ staggerChildren: 0.4, delayChildren: 0.8 })}
      className="flex flex-col md:flex-row gap-y-[26px] md:gap-5 md:flex-wrap"
    >
      {servicesList.map((service, idx) => (
        <ServiceCard key={idx} service={service} />
      ))}
    </motion.ul>
  );
}
