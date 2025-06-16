import { Dispatch, ReactNode, SetStateAction } from "react";
import IconButton from "../buttons/IconButton";

interface ModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
}

export default function Modal({
  isPopUpShown,
  setIsPopUpShown,
  children,
  className = "",
}: ModalProps) {
  return (
    <div
      className={`${
        isPopUpShown
          ? " -translate-y-[calc(50dvh-50%)] opacity-100 scale-100"
          : "pointer-events-none opacity-0 scale-90"
      } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-[80] w-[310px] xl:w-[431px] max-h-[calc(100dvh-90px)] 
      xl:max-h-[calc(100dvh-188px)] overflow-y-auto bg-white rounded-[8px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-main popup-scroll ${className}`}
    >
      <div className="absolute z-[80] top-1 right-4">
        <IconButton
          handleClick={() => setIsPopUpShown(false)}
          className="size-6 xl:size-8"
        >
          <span className="font-guano-apes text-[48px] font-medium leading-[120%] uppercase">
            x
          </span>
        </IconButton>
      </div>
      {children}
    </div>
  );
}
