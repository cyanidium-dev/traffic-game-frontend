import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Link } from "@/i18n/navigation";
import { Post } from "@/types/post";
import { useTranslations } from "next-intl";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const t = useTranslations("homePage.blog");
  const { title, description, slug } = post;

  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <div className="flex flex-col justify-between h-full pt-9 pb-5 px-5 rounded-[8px] backdrop-blur-[5px] overflow-hidden">
        <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        <div>
          {" "}
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
  );
}
