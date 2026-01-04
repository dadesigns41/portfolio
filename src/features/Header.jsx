import Logo from "../components/Logo";
import NavLink from "../components/NavLink";

function Header() {
  return (
    <header className="header">
      <Logo />

      <nav className="nav">
        <NavLink href="#intro">Intro</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#dev-toolbelt">Dev Toolbelt</NavLink> {/* Added */}
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
