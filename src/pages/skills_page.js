import React from "react";
import styled from "styled-components";
import Skill from "../components/skill";

const StyledSkillsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 3rem 6rem;

  & > .skillsPage_title {
    margin-bottom: 3rem;
  }

  & > .skillsPage_skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
  }
`;

const skills = [
  {
    prim: "HTML",
    sec: "Bootstrap",
  },
  {
    prim: "CSS",
    sec: "Sass",
  },
  {
    prim: "Javascript",
    sec: "React",
  },
  {
    prim: "Java",
    sec: "Spring",
  },
  {
    prim: "Dart",
    sec: "Flutter",
  },
  {
    prim: "Git",
    sec: "Github",
  },
];

function SkillsPage() {
  return (
    <StyledSkillsPage id="mySkills">
      <h1 className="skillsPage_title">Skills</h1>
      <div className="skillsPage_skills">
        {skills.map((s) => (
          <Skill primSkill={s.prim} secSkill={s.sec} />
        ))}
      </div>
    </StyledSkillsPage>
  );
}

export default SkillsPage;
