import styled from "styled-components";
// import ThemeToggle from "../utils/ThemeToggle";
// import MyComponent from "../components/extras/MyComponent";
// import TestAnimation from "../components/extras/TestAnimation";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import StatsSection from "../components/Home/StatsSection";
import WhyUsSection from "../components/Home/WhyUsSection";
import ConsultationCTA from "../components/Home/ConsultationCTA";
import MissionSection from "../components/Home/MissionSection";
import TestimonialsSection from "../components/Home/TestimonialsSection";

const Container = styled.div`
  /* border: 1px solid white; */
  height: 100vh;
  width: auto;
  gap: 2rem;
  flex-direction: column;
`;

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <WhyUsSection />
      <ConsultationCTA />
      <MissionSection />
      <TestimonialsSection />
    </>
  );
}

export default Home;
