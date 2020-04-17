import React, { useState, useEffect } from "react";
import DateDropdown from "./components/DateDropdown";
import Photo from "./components/Photo";
import PhotoTitle from "./components/PhotoTitle";
import PhotoDescription from "./components/PhotoDescription";
import PhotoDate from "./components/PhotoDate";
import moment from "moment";
import styled from "styled-components";

const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.REACT_APP_API_KEY;

const WrapperDiv = styled.div`
@keyframes animation {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
animation-name: animation;
animation-duration: 1s;
  background-image: linear-gradient(to top right, red, yellow);
  background-size: 100vw;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
`;

const Col = styled.div`
  width: 48%;
  text-align: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function App() {
  const [nasaPic, setNasaPic] = useState("");
  const [date, setDate] = useState("");

  const newDate = () => {
    setNasaPic("");
    const val = document.querySelector("input[type='date']");
    const dateVal = val.value;
    return setDate(dateVal);
  };

  useEffect(() => {
    console.log(date);

    const fetchData = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
        )
        .then((res) => {
          setNasaPic(res.data);
        })
        .catch((err) => {
          console.log(`${err}`);
        });
    };
    fetchData();
  }, [date]);

  console.log(nasaPic);

  if (nasaPic === "") {
    return <h3>Loading...</h3>;
  }
  return (
    <WrapperDiv>
      <Title>NASA Astronomy Picture of the Day</Title>
      <FlexWrapper>
        <Col>
          <DateDropdown onClick={newDate} />
        </Col>
        <Col>
          <PhotoTitle>{nasaPic.title} </PhotoTitle>
          <Photo src={nasaPic.url} alt={nasaPic.title} />
          <PhotoDate>
            Photo Date: {moment(nasaPic.date).format("MM/DD/YYYY")}
          </PhotoDate>
          <PhotoDescription desc={nasaPic.explanation} />
        </Col>
      </FlexWrapper>
    </WrapperDiv>
  );
}

export default App;
