import ArrowIcon from "@/components/shared/icons/ArrowIcon";
import SectionTitle from "@/components/shared/titles/SectionTitle";
import { Link } from "@/i18n/navigation";
import { Post } from "@/types/post";
import { useTranslations } from "next-intl";
import Image from "next/image";
import BlogSwiper from "./BlogSwiper";

interface BlogProps {
  postsList: Post[];
}

export default function Blog({ postsList }: BlogProps) {
  const t = useTranslations("homePage.blog");

  return (
    <section className="pt-[299px] xl:pt-[316px]">
      <div className="sm:flex gap-5 mb-10 sm:mb-0 overflow-hidden xs:max-w-full sm:max-w-full xl:max-w-[1280px] px-6 sm:pr-0 lg:pl-20 xl:px-30 mx-auto sm:mr-0 sm:ml-[calc((100vw-640px)/2)] md:ml-[calc((100vw-768px)/2)] lg:ml-[calc((100vw-1024px)/2)] xl:mx-auto">
        <div className="relative sm:w-[245px] px-5 pt-9 pb-4.5 bg-white rounded-[8px] shrink-0 max-h-[516px]">
          <SectionTitle
            variant="dark"
            className="max-w-[171px] mb-3 text-[48px]"
          >
            {t("title")}
          </SectionTitle>
          <p className="max-w-[171px] mb-[218px] text-[14px] font-light leading-[120%] text-black">
            {t("description")}
          </p>
          <Link href="/blog">
            <button
              type="button"
              aria-label="icon button"
              className="group cursor-pointer flex items-center justify-center size-24 rounded-full bg-black active:scale-[95%] transition duration-300 ease-out will-change-transform"
            >
              <ArrowIcon className="group-active:scale-[95%] group-[focus-visible]:translate-x-1 group-[focus-visible]:-translate-y-1 xl:group-hover:translate-x-1 xl:group-hover:-translate-y-1 transition duration-300 ease-out will-change-transform" />
            </button>
          </Link>
          <Image
            src="/images/home/blog/man.webp"
            alt="man"
            width={313}
            height={470}
            className="absolute left-0 bottom-0 mix-blend-hard-light pointer-events-none"
          />
        </div>
        <div className="hidden sm:block w-[calc(100%-245px-20px)]">
          <BlogSwiper postsList={postsList} />
        </div>
      </div>
      <div className="sm:hidden xs:max-w-full sm:max-w-[640px] pl-6 ml-auto">
        <BlogSwiper postsList={postsList} />
      </div>
    </section>
  );
}
