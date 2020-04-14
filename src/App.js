import React, { useState, useEffect } from "react";
import DateDropdown from "./components/DateDropdown";
import Photo from "./components/Photo";
import PhotoTitle from "./components/PhotoTitle";
import PhotoDescription from "./components/PhotoDescription";
import PhotoDate from "./components/PhotoDate";
import styled from "styled-components";
// import dotenv from "dotenv";
const axios = require("axios");
const apiKey = "5uWkEnwSm2ygUVGF51iuPAiwWhJViiJlWoRgmhJ1";
// dotenv.config({path: "../.env"});
// const apiKey = process.env.API_KEY;
const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
console.log(apiKey);

function App() {
  const [nasaPic, setNasaPic] = useState("");
  const [date, setDate] = useState("");

  const newDate = () => {
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
      <PhotoTitle>{nasaPic.title} </PhotoTitle>
      <Photo src={nasaPic.url} alt={nasaPic.title} />
      <PhotoDate>Photo Date: {nasaPic.date}</PhotoDate>
      <DateDropdown onClick={newDate} />
      <PhotoDescription desc={nasaPic.explanation} />
    </WrapperDiv>
  );
}

export default App;
