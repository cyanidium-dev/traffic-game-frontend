import Container from "../container/Container";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 py-9 xl:py-10">
      <Container>
        <Logo />
      </Container>
    </header>
  );
}
