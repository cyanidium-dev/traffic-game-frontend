import * as motion from "motion/react-client";

interface PageTitleProps {
  children: string;
  className?: string;
  variant?: "light" | "dark";
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.7 } },
};

export default function PageTitle({
  children,
  className = "",
  variant = "light",
}: PageTitleProps) {
  // розбиваємо рядок на масив літер
  const letters = children.split("");

  return (
    <motion.h1
      className={`will-change-transform font-actay font-bold leading-none uppercase text-transparent bg-clip-text ${
        variant === "light"
          ? "bg-[linear-gradient(125deg,_#fff_22.37%,_#ffb5e6_94.04%)]"
          : "bg-[linear-gradient(112deg,_#1E1E1E_30.78%,_#B22A7C_80.94%)]"
      } [text-shadow:3.508px_2.923px_8.916px_rgba(255,0,166,0.2)] ${className}`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          variants={letter}
          style={{ display: "inline-block" }}
          aria-hidden="true"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}
