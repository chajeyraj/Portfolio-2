import { AnimatedBackground } from "../components/animated-background";
import { Navigation } from "../components/navigation";
import { HeroSection } from "../components/hero-section";
import { AboutSection } from "../components/about-section";
import { ProjectsSection } from "../components/projects-section";
import { ExperienceSection } from "../components/experience-section";
import { ContactSection } from "../components/contact-section";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      {/* Modern Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
