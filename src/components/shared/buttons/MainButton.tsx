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
      className={`relative enabled:cursor-pointer flex items-center justify-center w-full h-[45px] px-3 rounded-full bg-main text-white
        text-[13px] font-actay font-bold leading-none uppercase xl:enabled:hover:brightness-125 enabled:focus-visible:brightness-125 
        disabled:bg-main/60 disabled:text-white/60
        transition duration-300 ease-in-out ${className}`}
    >
      <span className="leading-none mt-1">
        {children}
        {isLoading ? <LoaderIcon /> : null}
      </span>
    </button>
  );
}
