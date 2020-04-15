import React from "react";
import styled from "styled-components";

const Div = styled.div`
display: flex;

text-align: center;
`

const PhotoArticle = styled.article`
margin: 0% 5% 2% 5%;
line-height: 1.4;
`

const PhotoDescription = props => {
  return (
    <Div>
      <PhotoArticle>{props.desc}</PhotoArticle>
    </Div>
  );
};

export default PhotoDescription;
