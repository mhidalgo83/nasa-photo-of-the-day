import React from "react";
import styled from "styled-components";
import "./Photo.css";

const PhotoImage = styled.img`
  @keyframes animation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation-name: animation;
  animation-duration: 4s;
  width: 50%;
  margin: 2% auto;
  box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.6);
`;

const Photo = (props) => {
  return <PhotoImage src={props.src} alt={props.alt} className="animation" />;
};

export default Photo;
