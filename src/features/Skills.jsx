import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        title="Skills"
        subtitle="Technologies and concepts I’m learning"
      />

      <ul>
        <li>HTML & CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Git & GitHub</li>
      </ul>
    </Section>
  );
}

export default Skills;
