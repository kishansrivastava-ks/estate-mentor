import styled from "styled-components";
import ThemeToggle from "../utils/ThemeToggle";

const Container = styled.div`
  /* border: 1px solid white; */
  height: 100vh;
  width: auto;
  gap: 2rem;
`;

function Home() {
  return (
    <Container className="flex-center">
      <div>Estate Mentor</div>
      <ThemeToggle />
    </Container>
  );
}

export default Home;
