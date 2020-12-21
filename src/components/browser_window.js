import React from "react";
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
    padding: 1rem;
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
      <div className="browserWindow-body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut voluptatibus
        ipsam facere voluptatem, architecto maxime accusamus quo labore nihil
        adipisci fugit id veritatis fuga! Tempora dolore quae distinctio
        expedita iure?
        <br />
        <br />
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt cum
        nostrum quis suscipit voluptate similique quod, ullam quae ex
        voluptatibus cupiditate quam et quasi quisquam dolores odio natus
        voluptas consectetur.
      </div>
    </StyledBrowserWindow>
  );
}

export default BrowserWindow;
