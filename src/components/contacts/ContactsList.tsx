import {
  EMAIL,
  INSTAGRAM_LINK,
  INSTAGRAM_NAME,
  LINKEDIN_LINK,
  LINKEDIN_NAME,
  TELEGRAM_LINK,
  TELEGRAM_NAME,
} from "@/constants/constants";

export default function ContactsList() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-wrap gap-y-[52px] md:w-[44.7%] sm:justify-between">
      <div className="flex flex-col gap-y-[52px]">
        <div className="leading-none">
          <h3 className="mb-[13px] text-[14px] font-medium leading-none uppercase">
            Email
          </h3>
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-actay text-[12px] font-bold leading-none uppercase xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
          >
            {EMAIL}
          </a>
        </div>
        <div className="leading-none">
          <h3 className="mb-[13px] text-[14px] font-medium leading-none uppercase">
            Instagram
          </h3>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-actay text-[12px] font-bold leading-none uppercase xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
          >
            {INSTAGRAM_NAME}
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-y-[52px]">
        <div className="leading-none">
          <h3 className="mb-[13px] text-[14px] font-medium leading-none uppercase">
            Telegram
          </h3>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-actay text-[12px] font-bold leading-none uppercase xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
          >
            {TELEGRAM_NAME}
          </a>
        </div>

        <div className="leading-none">
          <h3 className="mb-[13px] text-[14px] font-medium leading-none uppercase">
            Linkedin
          </h3>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="font-actay text-[12px] font-bold leading-none uppercase xl:hover:text-main-light focus-visible:text-main-light transition duration-300 ease-in-out"
          >
            {LINKEDIN_NAME}
          </a>
        </div>
      </div>
    </div>
  );
}
