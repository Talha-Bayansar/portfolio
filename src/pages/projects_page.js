import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import babili from "../images/babili.png";
import menuCard from "../images/menuCard.png";
import webshop from "../images/webshop.png";

const StyledProjectsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c9c9c9;
  padding: 3rem;

  & > .projectPage_projects {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 3rem 0 0;
  }
`;

function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <h1 className="projectPage_title">Projects</h1>
      <div className="projectPage_projects">
        <Card imgUrl={babili} />
        <Card imgUrl={menuCard} />
        <Card imgUrl={webshop} />
      </div>
    </StyledProjectsPage>
  );
}

export default ProjectsPage;
