function NavLink({ href, children }) {
  return (
    <a href={href} style={{ margin: '0 30px', textDecoration: 'none', color: 'black' }}>
      {children}
    </a>
  );
}

export default NavLink;
