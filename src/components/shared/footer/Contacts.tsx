import { PHONE, EMAIL } from "@/constants/constants";
import { headerPhoneRegex } from "@/regex/regex";

export default function Contacts() {
  return (
    <div className="flex flex-col gap-y-3 mb-[54px] md:mb-0 sm:w-1/3">
      <a
        href={`tel:${PHONE.replace(/\D/g, "")}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="font-actay text-[12px] font-bold leading-[150%] xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
      >
        {PHONE.replace(headerPhoneRegex, "$1-$2-$3-$4-$5")}
      </a>
      <a
        href={`mailto:${EMAIL}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="font-actay text-[12px] font-bold leading-[150%] uppercase xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
      >
        {EMAIL}
      </a>
    </div>
  );
}
