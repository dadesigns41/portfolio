import SectionHeader from '../components/SectionHeader';
import CTAButton from '../components/CTAButton';

function Intro() {
  return (
    <section id="intro" style={{ padding: '80px 20px', textAlign: 'center' }}>
      <SectionHeader title="Hi, I’m Danny Anthony" />
      <p>Rebuilding my portfolio with React & modern tools</p>
      <CTAButton text="View Projects" href="#projects" />
    </section>
  );
}

export default Intro;
