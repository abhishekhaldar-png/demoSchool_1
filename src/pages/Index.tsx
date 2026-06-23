import Navbar from "@/components/school/Navbar";
import HeroSection from "@/components/school/HeroSection";
import QuickTiles from "@/components/school/QuickTiles";
import WhyUsSection from "@/components/school/WhyUsSection";
import StatsBar from "@/components/school/StatsBar";
import ProgramsSection from "@/components/school/ProgramsSection";
import TestimonialsSection from "@/components/school/TestimonialsSection";
import AboutSection from "@/components/school/AboutSection";
import AcademicsSection from "@/components/school/AcademicsSection";
import FeesSection from "@/components/school/FeesSection";
import AdmissionsSection from "@/components/school/AdmissionsSection";
import StudentLifeSection from "@/components/school/StudentLifeSection";
import FacilitiesSection from "@/components/school/FacilitiesSection";
import ResultsSection from "@/components/school/ResultsSection";
import GallerySection from "@/components/school/GallerySection";
import NewsSection from "@/components/school/NewsSection";
import ContactSection from "@/components/school/ContactSection";
import CtaBanner from "@/components/school/CtaBanner";
import Footer from "@/components/school/Footer";
import ScriptInjector from "@/components/school/ScriptsInjector";

export default function Index() {
  return (
    <>
      <Navbar />
      <ScriptInjector />
      <HeroSection />
      <QuickTiles />
      <WhyUsSection />
      <StatsBar />
      <ProgramsSection />
      <TestimonialsSection />
      <AboutSection />
      <AcademicsSection />
      <FeesSection />
      <AdmissionsSection />
      <StudentLifeSection />
      <FacilitiesSection />
      <ResultsSection />
      <GallerySection />
      <NewsSection />
      <ContactSection />
      <CtaBanner />
      <Footer />
      <script src="https://ai-service.edustoke.com/widget?botId=bot_fpzatjox" defer></script>
    </>
  );
}
