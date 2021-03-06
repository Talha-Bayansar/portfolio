import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import StopOutlinedIcon from "@material-ui/icons/StopOutlined";
import RemoveIcon from "@material-ui/icons/Remove";

const StyledBrowserWindow = styled.div`
  display: block;
  border: 1px solid #0a3156;

  & > .browserWindow-header {
    background-color: #0a3156;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5rem;

    & > .header-options {
      display: flex;
      height: 100%;

      & > .options-icon {
        background-color: transparent;
        border: none;
        color: #ffffff7a;
        cursor: pointer;
        width: 3rem;

        &:hover {
          background-color: #ffffff7a;
          color: white;
        }
      }

      & > .options-icon:nth-child(3) {
        &:hover {
          background-color: red;
        }
      }
    }
  }

  & > .browserWindow-body {
    padding: ${(props) => !props.isMinimized && "1rem"};
    overflow: hidden;
    height: ${(props) => props.isMinimized && "0px"};
  }
`;

function BrowserWindow(props) {
  const [isMinimized, setIsMinimized] = useState(false);
  return (
    <StyledBrowserWindow isMinimized={isMinimized}>
      <header className="browserWindow-header">
        <div className="header-options">
          <button onClick={() => setIsMinimized(true)} className="options-icon">
            <RemoveIcon />
          </button>
          <button
            onClick={() => setIsMinimized(false)}
            className="options-icon"
          >
            <StopOutlinedIcon />
          </button>
          <button className="options-icon">
            <CloseIcon />
          </button>
        </div>
      </header>
      <div className="browserWindow-body">{props.children}</div>
    </StyledBrowserWindow>
  );
}

export default BrowserWindow;
