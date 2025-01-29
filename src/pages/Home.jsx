import styled from "styled-components";
// import ThemeToggle from "../utils/ThemeToggle";
// import MyComponent from "../components/extras/MyComponent";
// import TestAnimation from "../components/extras/TestAnimation";
import HeroSection from "../components/Home/HeroSection";
import FeaturesSection from "../components/Home/FeaturesSection";

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
    </>
  );
}

export default Home;
