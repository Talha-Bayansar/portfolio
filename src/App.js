import styled from "styled-components";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landing_page";
import ProjectsPage from "./pages/projects_page";
import SkillsPage from "./pages/skills_page";

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
      <SkillsPage />
      <Footer />
    </StyledApp>
  );
}

export default App;
