import Logo from '../components/Logo';
import NavLink from '../components/NavLink';

function Header() {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px' }}>
      <Logo />
      <nav>
        <NavLink href="#intro">Intro</NavLink>
        <NavLink href="#skills">Skills</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;
