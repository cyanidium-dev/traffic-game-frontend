"use client";
import Container from "@/components/shared/container/Container";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { listVariants } from "@/utils/animationVariants";
import BenefitsImages from "./BenefitsImages";
import BenefitItem from "./BenefitItem";

export default function Benefits() {
  const t = useTranslations("homePage.benefits");

  const benefitsList = [
    { value: "150+", description: t("employees") },
    { value: "100%", description: t("budgets") },
    { value: "2.5", description: t("experience") },
  ];

  return (
    <section className="relative pt-25 pb-24 md:py-[47px] bg-main">
      <BenefitsImages />
      <Container>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: true, amount: 0.2 }}
          variants={listVariants({ staggerChildren: 0.3, delayChildren: 0.4 })}
          className="flex flex-col md:flex-row gap-6 md:gap-5"
        >
          {benefitsList.map((benefit, idx) => (
            <BenefitItem key={idx} benefit={benefit} />
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
