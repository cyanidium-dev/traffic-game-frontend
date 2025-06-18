interface VacancyTitleProps {
  children: string;
  position: "left" | "right" | "center";
  className?: string;
}

export default function VacancyTitle({
  children,
  position,
  className = "",
}: VacancyTitleProps) {
  return (
    <h3
      data-label={children}
      className={`relative w-fit px-1.5 mx-auto font-guano-apes text-[64px] xl:text-[96px] font-medium leading-[120%] text-center text-transparent bg-clip-text uppercase
        bg-[linear-gradient(125deg,_#FFF_22.37%,_#FFB5E6_94.04%)] before:content-[attr(data-label)] before:absolute before:-z-10 
       before:left-1/2 before:-translate-x-1/2 before:top-[30px] xl:top-[42px] before:w-full before:blur-[3.36px] before:text-pink-dark 
       before:text-[58px] xl:before:text-[86px] ${position === "left" ? "md:ml-0" : position === "right" ? "md:mr-0" : ""} ${className}`}
    >
      {children}
    </h3>
  );
}
