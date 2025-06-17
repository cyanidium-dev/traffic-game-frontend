import { useTranslations } from "next-intl";
import Container from "../shared/container/Container";
import PageTitle from "./PageTitle";
import ContactsList from "./ContactsList";

export default function ContactsInfo() {
  const t = useTranslations("contactsPage");

  return (
    <section className="pt-[210px] xl:pt-[208px] pb-[61px] xl:pb-[371px]">
      <Container>
        <div className="md:flex md:justify-between mb-[422px] md:mb-[371px]">
          <div className="">
            <PageTitle
              variant="dark"
              className="w-fit mb-8 text-[36px] xl:text-[48px]"
            >
              {t("title")}
            </PageTitle>
            <p className="max-w-[388px] text-black text-[14px] font-light leading-[120%]">
              {t("description")}
            </p>
          </div>
          <ContactsList />
        </div>
      </Container>
    </section>
  );
}
