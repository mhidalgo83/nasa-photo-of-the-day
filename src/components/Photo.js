import React from "react";
import styled from "styled-components";

const PhotoImage = styled.img`
  width: 50%;
  margin: 2% auto;
`;

const Photo = (props) => {
  return <PhotoImage src={props.src} alt={props.alt} />;
};

export default Photo;
