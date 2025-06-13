import { Dispatch, ReactNode, SetStateAction } from "react";
import LoaderIcon from "../icons/LoaderIcon";

interface MainButtonProps {
  children: string | ReactNode;
  className?: string;
  type?: "submit" | "button";
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void | Dispatch<SetStateAction<boolean>>;
}

export default function MainButton({
  children,
  className = "",
  type = "button",
  disabled = false,
  isLoading = false,
  onClick,
}: MainButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`group relative overflow-hidden enabled:cursor-pointer flex items-center justify-center w-full h-[45px] px-3 rounded-full bg-main text-white
        text-[13px] font-actay font-bold leading-none uppercase disabled:bg-main/60 disabled:text-white/60
        transition duration-300 ease-in-out ${className}`}
    >
      <span
        className="absolute top-0 left-[-150%] w-full h-full bg-gradient-to-r from-white/40 via-black/30 to-white/40 opacity-70 
skew-x-[-40deg] xl:group-enabled:group-hover:left-[120%] transition-all duration-[800ms] ease-in-out"
      />
      <span className="leading-none mt-1">
        {children}
        {isLoading ? <LoaderIcon /> : null}
      </span>
    </button>
  );
}
