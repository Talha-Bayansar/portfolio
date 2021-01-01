import React from "react";
import styled from "styled-components";

const StyledLandingPage = styled.div`
  display: flex;

  & > .circle {
    z-index: -1;
    position: absolute;
    left: -50px;
    top: 0px;
    display: block;
    width: 300px;
    height: 300px;
    background-color: #639fabff;
    opacity: 0.5;
    border-radius: 50%;
  }
`;

function LandingPage() {
  return (
    <StyledLandingPage>
      <div className="circle"></div>
    </StyledLandingPage>
  );
}

export default LandingPage;
