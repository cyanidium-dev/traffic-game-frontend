import Image from "next/image";
import { useTranslations } from "next-intl";
import { calculateReadingTime } from "@/utils/calculateReadingTime";
import { Post } from "@/types/post";

interface EstimatedReadingTimeProps {
  post: Post;
}

export default function EstimatedReadingTime({
  post,
}: EstimatedReadingTimeProps) {
  const t = useTranslations("blogPage");

  const readingTime = calculateReadingTime(post);

  return (
    <div className="relative shrink-0 w-fit min-w-[148px] h-[39px] p-[1px] rounded-full bg-pink-ultra-light">
      <div className="flex items-center justify-center w-full h-full px-4 rounded-full bg-[linear-gradient(95deg,_#121212_1.82%,_#F80498_318.22%)]">
        <Image
          src="/images/blog/blogList/clock.svg"
          alt="clock"
          width="27"
          height="27"
          className="block mr-3"
        />
        <p className="text-[16px] font-normal leading-[130%]">
          {t.rich("min", {
            count: readingTime,
          })}
        </p>
      </div>
    </div>
  );
}
