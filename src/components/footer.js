import React from "react";
import styled from "styled-components";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #222222ff;
  color: white;
  padding: 2rem;

  & > .footer_content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }

  & > hr {
    width: 80%;
    margin: 2rem;
  }

  & > .footer_copyright {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media only screen and (max-width: 500px) {
    margin-bottom: 8vh;
  }
`;

const StyledGithub = styled(GitHubIcon)`
  color: white;
`;

const StyledLinkedIn = styled(LinkedInIcon)`
  color: white;
`;

function Footer() {
  return (
    <StyledFooter>
      <div className="footer_content">
        <a href="https://github.com/Talha-Bayansar" target="_blank">
          <StyledGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/talha-bayansar-17039a19a/"
          target="_blank"
        >
          <StyledLinkedIn />
        </a>
      </div>
      <hr />
      <div className="footer_copyright">
        &copy;Copyright 2021 - All rights reserved
      </div>
    </StyledFooter>
  );
}

export default Footer;
