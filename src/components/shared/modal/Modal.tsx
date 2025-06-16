import { Dispatch, ReactNode, SetStateAction } from "react";
import IconButton from "../buttons/IconButton";
import Image from "next/image";

interface ModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  className?: string;
  showBackgound?: boolean;
}

export default function Modal({
  isPopUpShown,
  setIsPopUpShown,
  children,
  className = "",
  showBackgound = true,
}: ModalProps) {
  return (
    <div
      className={`${
        isPopUpShown
          ? " -translate-y-[calc(50dvh-50%)] opacity-100 scale-100"
          : "pointer-events-none opacity-0 scale-90"
      } fixed left-1/2 bottom-0 transform -translate-x-1/2 transition duration-[600ms] ease-out z-[80] p-8 max-h-[calc(100dvh-90px)] 
      xl:max-h-[calc(100dvh-188px)] overflow-y-auto bg-white rounded-[8px] scrollbar scrollbar-w-[3px] scrollbar-thumb-rounded-full 
      scrollbar-track-rounded-full scrollbar-thumb-transparent scrollbar-track-main popup-scroll overflow-hidden ${className}`}
    >
      {showBackgound ? (
        <>
          {" "}
          <Image
            src="/images/modal/figures.webp"
            width={847}
            height={851}
            alt="background"
            className="absolute top-[107px] left-[0] w-[424px] h-auto -z-20 mix-blend-hard-light"
          />
          <Image
            src="/images/modal/background.webp"
            fill
            sizes="50vw"
            alt="background"
            className="absolute top-0 left-0 object-cover -z-10 mix-blend-difference"
          />{" "}
        </>
      ) : null}
      <div className="absolute z-[80] top-1 right-4">
        <IconButton handleClick={() => setIsPopUpShown(false)} className="">
          <span className="font-guano-apes text-[48px] font-medium leading-[120%] uppercase text-black">
            x
          </span>
        </IconButton>
      </div>
      {children}
    </div>
  );
}
