function DevToolIcon({ icon, label }) {
  return (
    <li className="tool-icon">
      <span className="tool-icon__icon">{icon}</span>
      <span className="tool-icon__label">{label}</span>
    </li>
  );
}

export default DevToolIcon;
