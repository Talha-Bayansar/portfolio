import styled from "styled-components";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landing_page";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <StyledApp className="App">
      <Navbar />
      <LandingPage />
    </StyledApp>
  );
}

export default App;
