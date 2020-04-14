import React from "react";
import styled from "styled-components";

const PhotoArticle = styled.article`
margin: 2% 5%;

`

const PhotoDescription = props => {
  return (
    <div>
      <PhotoArticle>{props.desc}</PhotoArticle>
    </div>
  );
};

export default PhotoDescription;
