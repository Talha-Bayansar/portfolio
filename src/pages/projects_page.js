import React from "react";
import styled from "styled-components";
import Card from "../components/card";

const StyledProjectsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 92vh;
  background-color: #c9c9c9;
`;

function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <h1 className="projectPage_title">Projects</h1>
      <div className="projectPage_projects">
        <Card />
      </div>
    </StyledProjectsPage>
  );
}

export default ProjectsPage;
