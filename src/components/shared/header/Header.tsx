import Container from "../container/Container";
import BurgerButton from "./BurgerButton";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "../logo/Logo";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 py-9 xl:py-10 w-dvw">
      <Container className="flex items-center justify-between">
        <Logo className="text-[12px]" />
        <div className="flex items-center gap-x-6 md:gap-x-14">
          <LocaleSwitcher />
          <NavMenu />
          <BurgerButton />
        </div>
      </Container>
    </header>
  );
}
