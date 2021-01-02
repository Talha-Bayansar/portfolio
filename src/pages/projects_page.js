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
  background-color: rgba(200, 200, 200, 0.5);
  padding: 3rem;

  & > .projectPage_projects {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    margin: 3rem 0 0;
  }
`;

const projects = [
  {
    imgUrl: babili,
    url: "https://babiliproject.herokuapp.com/",
    date: "June 2020",
    title: "Babili",
    description:
      "Babili is a platform for foreign civilians to learn Dutch by completing excercises given by the teacher.",
  },
  {
    imgUrl: menuCard,
    url: "https://talha-bayansar.github.io/menucard",
    date: "October 2020",
    title: "Menu Card",
    description:
      "Menu Card is a project made as an excercise for school. It is a menu card where you have to scan a table so you can make orders based on the menu.",
  },
  {
    imgUrl: webshop,
    url: "https://talha-bayansar.github.io/EindOpdracht",
    date: "November 2020",
    title: "Web Shop",
    description:
      "Web Shop is a project made as an assignment for school. This is a concept project where you can sell and buy products with authentication.",
  },
];

function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <h1 className="projectPage_title">Projects</h1>
      <div className="projectPage_projects">
        {projects.map((p) => (
          <Card
            imgUrl={p.imgUrl}
            url={p.url}
            date={p.date}
            title={p.title}
            description={p.description}
          />
        ))}
      </div>
    </StyledProjectsPage>
  );
}

export default ProjectsPage;
