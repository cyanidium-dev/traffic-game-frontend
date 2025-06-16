"use client";
import { Form, Formik, FormikHelpers } from "formik";
import axios from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { useTranslations } from "next-intl";

import { CallBackValidation } from "@/schemas/callbackFormValidation";

import CustomizedInput from "../formComponents/CustomizedInput";
import SubmitButton from "../formComponents/SubmitButton";

export interface ValuesCallBackFormType {
  name: string;
  email: string;
  cv: string;
  message: string;
}

interface CallBackFormProps {
  setIsError: Dispatch<SetStateAction<boolean>>;
  setIsNotificationShown: Dispatch<SetStateAction<boolean>>;
  setIsPopUpShown?: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

export default function CallBackForm({
  setIsError,
  setIsNotificationShown,
  className = "",
}: CallBackFormProps) {
  const t = useTranslations("forms");
  const [isLoading, setIsLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    cv: "",
    message: "",
  };

  const validationSchema = CallBackValidation();

  const submitForm = async (
    values: ValuesCallBackFormType,
    formikHelpers: FormikHelpers<ValuesCallBackFormType>
  ) => {
    const { resetForm } = formikHelpers;
    const data =
      `<b>Заявка "Форма "Залиш свої контакти"</b>\n` +
      `<b>Ім'я:</b> ${values.name.trim()}\n` +
      `<b>Email:</b> ${values.email.trim()}\n` +
      `<b>Посилання на CV:</b> ${values.cv.trim()}\n` +
      `<b>Повідомлення:</b> ${values.message.trim()}\n`;
    try {
      setIsLoading(true);

      await axios({
        method: "post",
        url: "/api/telegram",
        data,
        headers: {
          "Content-Type": "application/json",
        },
      });

      resetForm();
      setIsNotificationShown(true);
    } catch (error) {
      setIsError(true);
      setIsNotificationShown(true);
      return error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
      validationSchema={validationSchema}
    >
      {({ errors, touched, dirty, isValid }) => (
        <Form className={`${className} flex flex-col gap-y-3.5`}>
          <CustomizedInput
            fieldName="name"
            placeholder={t("namePlaceholder")}
            isRequired
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="email"
            inputType="email"
            placeholder={t("emailPlaceholder")}
            isRequired
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="cv"
            placeholder={t("cvLinkPlaceholder")}
            isRequired
            errors={errors}
            touched={touched}
          />
          <CustomizedInput
            fieldName="message"
            as="textarea"
            placeholder={t("messagePlaceholder")}
            isRequired
            errors={errors}
            touched={touched}
          />

          <SubmitButton
            dirty={dirty}
            isValid={isValid}
            isLoading={isLoading}
            text={t("submitButton")}
            className="mt-1.5 h-10"
          />
        </Form>
      )}
    </Formik>
  );
}
