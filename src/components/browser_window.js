import React from "react";
import styled from "styled-components";
import MinimizeIcon from "@material-ui/icons/Minimize";
import AspectRatioIcon from "@material-ui/icons/AspectRatio";
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

    & > .header-options {
      display: flex;

      & > .options-icon {
        background-color: transparent;
        border: none;
        color: #ffffff7a;
        cursor: pointer;

        &:hover {
          background-color: #ffffff7a;
          color: white;
        }
      }

      & button:nth-last-child():hover {
        background-color: red;
      }
    }
  }
`;

function BrowserWindow() {
  return (
    <StyledBrowserWindow>
      <header className="browserWindow-header">
        <div className="header-options">
          <button className="options-icon">
            <RemoveIcon />
          </button>
          <button className="options-icon">
            <StopOutlinedIcon />
          </button>
          <button className="options-icon">
            <CloseIcon />
          </button>
        </div>
      </header>
      <div className="browserWindow-body"></div>
    </StyledBrowserWindow>
  );
}

export default BrowserWindow;
