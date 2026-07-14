import HeroSection from '@/components/sections/hero';
import TechMarquee from '@/components/sections/tech-marquee';
import AboutSection from '@/components/sections/about';
import ExperienceSection from '@/components/sections/experience';
import ProjectsSection from '@/components/sections/projects';
import ContactSection from '@/components/sections/contact';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
