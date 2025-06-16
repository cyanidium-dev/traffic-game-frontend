import * as motion from "motion/react-client";

interface SectionTitleProps {
  children: string;
  className?: string;
  variant?: "light" | "dark";
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.6 } },
};

export default function SectionTitle({
  children,
  className = "",
  variant = "light",
}: SectionTitleProps) {
  const letters = children.split("");

  const gradient =
    variant === "light"
      ? "bg-[linear-gradient(125deg,_#ffffff_22.37%,_#ffb5e6_94.04%)]"
      : "bg-[linear-gradient(112deg,_#1E1E1E_30.78%,_#B22A7C_80.94%)]";

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative inline-block ${className}`}
    >
      {/* Тіньовий шар під низом */}
      <motion.h2
        className="absolute inset-0 font-actay font-bold leading-none uppercase text-transparent pointer-events-none select-none [text-shadow:3.508px_2.923px_8.916px_rgba(255,0,166,0.2)]"
        aria-hidden="true"
        variants={container}
      >
        {letters.map((char, index) => (
          <motion.span
            key={`shadow-${index}`}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* Основний текст з градієнтом */}
      <motion.h2
        className={`relative font-actay font-bold leading-none uppercase text-transparent bg-clip-text ${gradient}`}
      >
        {letters.map((char, index) => (
          <motion.span
            key={index}
            variants={letter}
            style={{ display: "inline-block" }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>
    </motion.div>
  );
}
