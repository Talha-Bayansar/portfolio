import styled from "styled-components";
import BrowserWindow from "./components/browser_window";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;
`;

function App() {
  return (
    <StyledApp className="App">
      <h1>Talha Bayansar</h1>
      <BrowserWindow />
    </StyledApp>
  );
}

export default App;
