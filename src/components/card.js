import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  min-width: 300px;
  max-width: 380px;
  height: 420px;
  perspective: 1000px;
  flex: 1;
  margin: 0 15px 30px;

  & * {
    box-sizing: border-box;
  }

  & .post {
    position: relative; /* Required to absolutely position the faces */
    width: 100%;
    height: 100%;
    transition: transform 1s;
    transform-style: preserve-3d;
  }
  & .post-front,
  .post-back {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: white;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  & .post-back {
    transform: rotateY(180deg);
  }
  &:hover .post,
  &:active .post {
    transform: rotateY(180deg);
  }
  & .post-img {
    background-size: cover;
    background-position: center;
    min-height: 70%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-image: url(${(props) => props.imgUrl});
    border: 1px solid grey;
  }
  & .post-info {
    padding: 20px 30px 30px;
  }
  & .post-info span {
    font-size: 0.8rem;
    color: #808080;
  }
  & .post-info h2 {
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 5px;
  }
  & .post-back {
    background-color: #ffffff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* To push the read more button to bottom */
    align-items: flex-start; /* To position the read more button at the left */
  }
  & .post-back h2 {
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 5px;
  }
  & .post-back p {
    margin-top: 10px;
    line-height: 1.6;
  }
  & .post-back a {
    text-decoration: none;
    color: #ffffff;
    background-color: #5678ba;
    padding: 10px 14px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.8em;
    font-weight: bold;
    border-radius: 5px;
  }
`;

function Card(props) {
  const { url, imgUrl, date, title, description } = props;
  return (
    <StyledCard imgUrl={imgUrl}>
      <div className="post">
        <div className="post-front">
          <div className="post-img"></div>
          <div className="post-info">
            <span>{date}</span>
            <h2>{title}</h2>
          </div>
        </div>
        <div className="post-back">
          <div className="post-except">
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
          <a href={url} target="_blank">
            Go to website
          </a>
        </div>
      </div>
    </StyledCard>
  );
}

export default Card;
