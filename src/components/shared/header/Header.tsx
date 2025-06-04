import Container from "../container/Container";
import LocaleSwitcher from "./LocaleSwitcher";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 py-9 xl:py-10 w-dvw">
      <Container className="flex items-center justify-between">
        <Logo />
        <LocaleSwitcher />
      </Container>
    </header>
  );
}
