import { Link } from "@/i18n/navigation";
import ArrowIcon from "@/components/shared/icons/ArrowIcon";

interface VacancyButtonProps {
  slug: string;
  className?: string;
}

export default function VacancyButton({
  slug,
  className = "",
}: VacancyButtonProps) {
  return (
    <Link href={`/blog/${slug}`}>
      <button
        type="button"
        aria-label="icon button"
        className={`group cursor-pointer flex items-center justify-center size-[66px] p-5 md:size-24 rounded-full bg-white active:scale-[95%] transition duration-300 ease-out will-change-transform ${className}`}
      >
        <ArrowIcon className="group-active:scale-[95%] group-[focus-visible]:translate-x-1 group-[focus-visible]:-translate-y-1 xl:group-hover:translate-x-1 xl:group-hover:-translate-y-1 transition duration-300 ease-out will-change-transform text-black" />
      </button>
    </Link>
  );
}
