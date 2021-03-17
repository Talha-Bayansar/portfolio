import React from "react";
import styled from "styled-components";
import Card from "../components/card";
import babili from "../images/babili.png";
import rekenbuddy from "../images/rekenbuddy.png";
import memories from "../images/memories.png";
import planner from "../images/planner.png";

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
            "Babili is a platform for foreign civilians to learn Dutch by completing excercises given by the teacher. This was made with Java Spring and Thymeleaf.",
    },
    {
        imgUrl: rekenbuddy,
        url: "https://testrekenbuddyleerkracht.web.app/",
        date: "January 2021",
        title: "Reken Buddy",
        description:
            "Reken Buddy is a platform for students to make math excercises given by their teachers. This was made with React.js on the frontend and Java (Spring) with Postgresql on the backend.",
    },
    {
        imgUrl: memories,
        url: "https://talha-bayansar.github.io/memories-frontend/",
        date: "january 2021",
        title: "Memories",
        description:
            "A pet project made for fun with React.js on the frontend and Node.js with MongoDB on the backend.",
    },
    {
        imgUrl: planner,
        url: "https://todo-nextjs-talha-bayansar.vercel.app/",
        date: "february 2021",
        title: "Planner",
        description:
            "A pet project to use as a planner to organize my work made with Next.js and Firebase.",
    },
];

function ProjectsPage() {
    return (
        <StyledProjectsPage id="myWork">
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
