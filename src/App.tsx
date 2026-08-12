import { HelmetProvider } from 'react-helmet-async';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import HighlightProjectSection from './components/HighlightProjectSection';
import ProjectsSection from './components/ProjectsSection';
import GithubStatsSection from './components/GithubStatsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-background relative selection:bg-primary/30">
        <CustomCursor />
        <Navbar />
        
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <HighlightProjectSection />
          <ProjectsSection />
          <GithubStatsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;
