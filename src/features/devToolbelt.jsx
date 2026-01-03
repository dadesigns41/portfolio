import SectionHeader from "../components/SectionHeader";
import DevToolIcon from "../components/DevToolIcon";

function DevToolbelt() {
  return (
    <section id="devtoolbelt" className="dev-toolbelt">
      <SectionHeader
        title="Dev Toolbelt"
        subtitle="Tools I use for development"
      />

      <ul className="toolbelt-icons">
        <DevToolIcon icon="📝" label="VSCode" />
        <DevToolIcon icon="⚡" label="Vite" />
        <DevToolIcon icon="🌱" label="Git" />
        <DevToolIcon icon="🔍" label="Chrome DevTools" />
      </ul>
    </section>
  );
}

export default DevToolbelt;
