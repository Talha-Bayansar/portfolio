import styled from "styled-components";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landing_page";
import ProjectsPage from "./pages/projects_page";

const StyledApp = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function App() {
  return (
    <StyledApp>
      <Navbar />
      <LandingPage />
      <ProjectsPage />
    </StyledApp>
  );
}

export default App;
