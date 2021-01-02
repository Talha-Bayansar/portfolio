import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 15rem;
  background-color: #222222ff;
  color: white;
  height: 8vh;
  z-index: 2;

  & > .navbar_left {
    color: #639fabff;
    font-weight: bold;
    letter-spacing: 3px;
    font-size: 20px;
  }

  & > .navbar_right {
    display: flex;
    width: 20rem;
    justify-content: space-around;
  }

  @media only screen and (max-width: 1500px) {
    padding: 1rem 10rem;
  }
  @media only screen and (max-width: 850px) {
    padding: 1rem 5rem;
  }
  @media only screen and (max-width: 500px) {
    bottom: 0px;
    padding: 1rem;

    & > .navbar_left {
      display: none;
    }

    & > .navbar_right {
      width: 100%;
    }
  }
`;

function Navbar() {
  return (
    <StyledNavbar>
      <div className="navbar_left">Talha Bayansar</div>
      <div className="navbar_right">
        <span className="navbar_right_item">My work</span>
        <span className="navbar_right_item">My skills</span>
        <span className="navbar_right_item">Contact me</span>
      </div>
    </StyledNavbar>
  );
}

export default Navbar;
