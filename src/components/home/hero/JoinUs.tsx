"use client";
import { useState } from "react";
import MainButton from "@/components/shared/buttons/MainButton";
import CallbackFormModal from "@/components/shared/modal/CallbackFormModal";
import { useTranslations } from "next-intl";
import Backdrop from "@/components/shared/backdrop/Backdrop";

export default function JoinUs() {
  const t = useTranslations();
  const [isPopUpShown, setIsPopUpShown] = useState(false);

  return (
    <>
      <MainButton onClick={() => setIsPopUpShown(true)}>
        {t("homePage.hero.button")}
      </MainButton>
      <CallbackFormModal
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
        title={t("modals.leaveContacts")}
        description={t("modals.description")}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
