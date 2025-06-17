import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Link } from "@/i18n/navigation";
import { Post } from "@/types/post";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface BlogCardProps {
  post: Post;
  idx: number;
}

export default function BlogCard({ post, idx }: BlogCardProps) {
  const t = useTranslations("homePage.blog");
  const { title, description, slug } = post;

  const isEven = (idx + 1) % 2 === 0;

  return (
    <div className="relative h-full">
      <Link
        href={`/blog/${slug}`}
        className={`block h-full rounded-[8px] p-[1px] ${isEven ? "bg-[linear-gradient(171.05deg,_#B14285_6.81%,_#FFFFFF_158.64%)]" : ""}`}
      >
        <div
          className={`flex flex-col justify-between w-full h-full pt-9 pb-5 px-5 rounded-[8px] backdrop-blur-[5px] overflow-hidden ${isEven ? "bg-[linear-gradient(349deg,_#FF67C3_-42.19%,_#121212_103.84%)]" : ""}`}
        >
          <div>
            <h3 className="min-h-[77px] mb-5 font-actay text-[16px] font-bold leading-[120%] uppercase line-clamp-4">
              {title}
            </h3>
            <p className="text-[14px] font-light leading-[120%] line-clamp-[8]">
              {description}
            </p>
          </div>

          <SecondaryButton variant="white">{t("readMore")}</SecondaryButton>
        </div>
      </Link>
      {isEven ? (
        <Image
          fill
          src="/images/home/blog/blogCardBg.webp"
          alt="background"
          className="absolute pointer-events-none"
        />
      ) : (
        <div className="absolute z-10 h-[520px] inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none rounded-[8px]" />
      )}
    </div>
  );
}
