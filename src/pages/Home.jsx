import styled from "styled-components";
import ThemeToggle from "../utils/ThemeToggle";
import MyComponent from "../components/extras/MyComponent";
import TestAnimation from "../components/extras/TestAnimation";

const Container = styled.div`
  /* border: 1px solid white; */
  height: 100vh;
  width: auto;
  gap: 2rem;
  flex-direction: column;
`;

function Home() {
  return (
    <Container className="flex-center">
      <div>Estate Mentor</div>
      <ThemeToggle />
      <MyComponent />
      {/* <TestAnimation /> */}
    </Container>
  );
}

export default Home;
