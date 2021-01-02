import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import babili from "../images/babili.png";

const StyledProjectsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  background-color: #c9c9c9;

  & > .projectPage_projects {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <h1 className="projectPage_title">Projects</h1>
      <div className="projectPage_projects">
        <Card url={babili} />
      </div>
    </StyledProjectsPage>
  );
}

export default ProjectsPage;
