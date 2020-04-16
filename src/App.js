import React, { useState, useEffect } from "react";
import DateDropdown from "./components/DateDropdown";
import Photo from "./components/Photo";
import PhotoTitle from "./components/PhotoTitle";
import PhotoDescription from "./components/PhotoDescription";
import PhotoDate from "./components/PhotoDate";
import styled from "styled-components";

const axios = require("axios");
require("dotenv").config();
const apiKey = process.env.REACT_APP_API_KEY;

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  text-align: center;
`

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
      <PhotoTitle>{nasaPic.title} </PhotoTitle>
      <Photo src={nasaPic.url} alt={nasaPic.title} />
      <PhotoDate>Photo Date: {nasaPic.date}</PhotoDate>
      <DateDropdown onClick={newDate} />
      <PhotoDescription desc={nasaPic.explanation} />
    </WrapperDiv>
  );
}

export default App;
