import SecondaryButton from "@/components/shared/buttons/SecondaryButton";
import { Link } from "@/i18n/navigation";
import { Post } from "@/types/post";
import { useTranslations } from "next-intl";
import Image from "next/image";
import EstimatedReadingTime from "@/components/shared/estReadingTime/EstimatedReadingTime";
import * as motion from "motion/react-client";
import { listItemVariants } from "@/utils/animationVariants";

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  const t = useTranslations("blogPage");

  const { title, description, image, slug } = post;

  return (
    <motion.li
      viewport={{ once: true, amount: 0.2 }}
      variants={listItemVariants}
      className="sm:w-[calc(50%-10px)] lg:w-[calc(33.33%-13.33px)] h-full rounded-[8px] bg-black/26 backdrop-blur-[5px] overflow-hidden"
    >
      <Link href={`/blog/${slug}`}>
        <div className="absolute z-10 inset-0 shadow-[inset_0px_4px_12.6px_rgba(255,255,255,0.25)] pointer-events-none" />
        <div className="relative flex items-end px-[26px] py-4 w-full h-[131px] rounded-[8px] overflow-hidden">
          <Image
            src={image}
            alt="blog image"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="absolute -z-10 object-cover"
          />
          <EstimatedReadingTime post={post} />
        </div>
        <div className="px-[26px] pt-6 pb-[42px] xl:pb-8">
          <h3 className="mb-5 font-actay text-[20px] font-bold leading-[120%] uppercase line-clamp-2">
            {title}
          </h3>
          <p className="mb-8 text-[14px] font-light leading-[120%] line-clamp-5">
            {description}
          </p>
          <SecondaryButton>{t("readMore")}</SecondaryButton>
        </div>
      </Link>
    </motion.li>
  );
}
