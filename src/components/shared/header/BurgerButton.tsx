import BurgerIcon from "../icons/BurgerIcon";

export default function BurgerButton() {
  return (
    <button
      type="button"
      aria-label="open menu button"
      className="cursor-pointer md:hidden"
    >
      <BurgerIcon />
    </button>
  );
}
