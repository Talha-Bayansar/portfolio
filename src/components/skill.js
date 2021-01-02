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

  .animation {
    position: absolute;
    top: 70%;
    height: 3px;
    width: 80%;
    background-color: #639fabff;
    animation: animationLine 3s ease infinite;
  }

  &:hover,
  &:active {
    .secondary_skill_div {
      display: block;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      background-color: #639fabff;
      border-radius: 10px;
      top: 70%;
      animation: smoothIn 1s ease;
    }

    .animation {
      display: none;
    }
  }

  & > .secondary_skill_div {
    display: none;
  }

  @keyframes animationLine {
    0% {
      width: 80%;
    }
    50% {
      width: 10%;
    }
    100% {
      width: 80%;
    }
  }

  @keyframes smoothIn {
    from {
      opacity: 0;
      transform: translateY(-20%);
    }
    to {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`;

function Skill(props) {
  const { primSkill, secSkill } = props;

  return (
    <StyledSkills>
      <span className="primary_skill">{primSkill}</span>
      <span className="animation"></span>
      <div className="secondary_skill_div">
        <span className="secondary_skill">{secSkill}</span>
      </div>
    </StyledSkills>
  );
}

export default Skill;
