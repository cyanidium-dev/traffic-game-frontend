import { Dispatch, SetStateAction, useState } from "react";
import CallBackForm from "../forms/CallBackForm";
import Modal from "./Modal";

interface CallbackFormModalProps {
  isPopUpShown: boolean;
  setIsPopUpShown: Dispatch<SetStateAction<boolean>>;
  title: string;
  description: string;
}

export default function CallbackFormModal({
  isPopUpShown,
  setIsPopUpShown,
  title,
  description,
}: CallbackFormModalProps) {
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <Modal isPopUpShown={isPopUpShown} setIsPopUpShown={setIsPopUpShown}>
      <h3
        className="max-w-[214px] xl:max-w-[329px] mx-auto mb-3 font-actay text-[32px] xl:text-[40px] font-bold uppercase leading-[110%] text-center
       text-transparent bg-clip-text bg-[linear-gradient(160deg,_#090909_13.21%,_#81516E_122.82%)] [text-shadow:3.508px_2.923px_8.916px_rgba(255,0,166,0.2)]"
      >
        {title}
      </h3>
      <p className="max-w-[208px] mx-auto mb-[26px] text-[14px] font-normal leading-[108%] text-center text-black">
        {description}
      </p>
      <CallBackForm
        setIsError={setIsError}
        setIsNotificationShown={setIsNotificationShown}
      />
    </Modal>
  );
}
