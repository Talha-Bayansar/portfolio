import React from "react";
import styled from "styled-components";

const StyledSkills = styled.div`
  position: relative;
  display: flex;
  width: 125px;
  height: 125px;
  background-color: #c4c4c4;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  margin: 1rem 1rem 5rem 1rem;

  & > .secondary_skill_div {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100px;
    background-color: #639fabff;
    border-radius: 10px;
    top: 70%;
  }
`;

function Skill(props) {
  const { primSkill, secSkill } = props;

  return (
    <StyledSkills>
      <span className="primary_skill">{primSkill}</span>
      <div className="secondary_skill_div">
        <span className="secondary_skill">{secSkill}</span>
      </div>
    </StyledSkills>
  );
}

export default Skill;
