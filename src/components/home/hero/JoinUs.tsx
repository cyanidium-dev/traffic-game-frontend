"use client";
import { useState } from "react";
import MainButton from "@/components/shared/buttons/MainButton";
import CallbackFormModal from "@/components/shared/modal/CallbackFormModal";
import { useTranslations } from "next-intl";
import Backdrop from "@/components/shared/backdrop/Backdrop";
import NotificationModal from "@/components/shared/modal/NotificationModal";

export default function JoinUs() {
  const t = useTranslations();
  const [isPopUpShown, setIsPopUpShown] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isNotificationShown, setIsNotificationShown] = useState(false);

  return (
    <>
      <MainButton onClick={() => setIsPopUpShown(true)}>
        {t("homePage.hero.button")}
      </MainButton>
      <CallbackFormModal
        isPopUpShown={isPopUpShown}
        setIsPopUpShown={setIsPopUpShown}
        setIsNotificationShown={setIsNotificationShown}
        setIsError={setIsError}
        title={t("modals.leaveContacts")}
        description={t("modals.description")}
      />
      <NotificationModal
        title={isError ? t("modals.errorTitle") : t("modals.successTitle")}
        description={
          isError
            ? t("modals.errorDescription")
            : t("modals.successDescription")
        }
        isPopUpShown={isNotificationShown}
        setIsPopUpShown={setIsNotificationShown}
      />
      <Backdrop
        isVisible={isPopUpShown}
        onClick={() => setIsPopUpShown(false)}
      />
    </>
  );
}
