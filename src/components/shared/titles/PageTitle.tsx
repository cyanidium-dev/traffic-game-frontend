import * as motion from "motion/react-client";

interface SectionTitleProps {
  children: string;
  className?: string;
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
}: SectionTitleProps) {
  const words = children.split(" ").map((word) => word.split(""));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative ${className}`}
    >
      {/* Тінь */}
      <motion.p
        className={`absolute inset-0 font-actay text-[48px] xl:text-[96px] font-bold leading-none uppercase text-transparent pointer-events-none select-none bg-[linear-gradient(112deg,_#ffffff_30.78%,_#B22A7C_80.94%)]
           "[text-shadow:3.508px_2.923px_8.916px_rgba(255,0,166,0.2)]"
         
        `}
        aria-hidden="true"
        variants={container}
      >
        {words.map((word, wordIdx) => (
          <span
            key={`shadow-word-${wordIdx}`}
            className="whitespace-nowrap mr-[0.25em]"
          >
            {word.map((char, charIdx) => (
              <motion.span
                key={`shadow-char-${wordIdx}-${charIdx}`}
                variants={letter}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.p>

      {/* Текст */}
      <motion.h1
        className={`relative font-actay text-[48px] xl:text-[96px] font-bold leading-none uppercase text-transparent bg-clip-text bg-[linear-gradient(112deg,_#ffffff_30.78%,_#B22A7C_80.94%)`}
      >
        {words.map((word, wordIdx) => (
          <span
            key={`word-${wordIdx}`}
            className="whitespace-nowrap mr-[0.25em]"
          >
            {word.map((char, charIdx) => (
              <motion.span
                key={`char-${wordIdx}-${charIdx}`}
                variants={letter}
                style={{ display: "inline-block" }}
              >
                {char}
              </motion.span>
            ))}
          </span>
        ))}
      </motion.h1>
    </motion.div>
  );
}
