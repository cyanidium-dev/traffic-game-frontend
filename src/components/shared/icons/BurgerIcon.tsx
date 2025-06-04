interface BurgerIconProps {
  className?: string;
}

export default function BurgerIcon({ className = "" }: BurgerIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-label="burger icon"
      className={className}
    >
      <path
        d="M6.66675 30H33.3334M6.66675 10H33.3334H6.66675ZM6.66675 20H33.3334H6.66675Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
