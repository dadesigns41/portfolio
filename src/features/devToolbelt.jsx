import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import DevToolIcon from "../components/DevToolIcon";

function DevToolbelt() {
  return (
    <Section id="dev-toolbelt" className="dev-toolbelt">
      <SectionHeader
        title="Dev Toolbelt"
        subtitle="Tools I use for development"
      />

      <ul className="toolbelt-icons">
        <DevToolIcon icon="📝" label="VSCode" />
        <DevToolIcon icon="⚡" label="Vite" />
        <DevToolIcon icon="🌱" label="Git" />
        <DevToolIcon icon="🔍" label="Chrome DevTools" />
        <DevToolIcon icon="🐳" label="Docker" />
        <DevToolIcon icon="☁️" label="AWS" />
        <DevToolIcon icon="🧪" label="Jest" />
      </ul>
    </Section>
  );
}

export default DevToolbelt;
