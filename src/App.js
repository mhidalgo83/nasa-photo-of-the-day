import React, { useState, useEffect } from "react";
import DateDropdown from "./components/DateDropdown";
import Photo from "./components/Photo";
import PhotoTitle from "./components/PhotoTitle";
import PhotoDescription from "./components/PhotoDescription";
import PhotoDate from "./components/PhotoDate";
import "./App.css";
const axios = require("axios");
const apiKey = "5uWkEnwSm2ygUVGF51iuPAiwWhJViiJlWoRgmhJ1";

function App() {
  let val;
  const [nasaPic, setNasaPic] = useState("");
  const [date, setDate] = useState("");

  const newDate = () => {
    val = document.querySelector("input[type='date']");
    const dateVal = val.value;
    return setDate(dateVal)
  };

  useEffect(() => {
    if (date === "") {
      setDate(new Date().toISOString().slice(0, 10));
    }

    const fetchData = () => {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`
        )
        .then((res) => {
          setNasaPic(res.data);
          console.log(nasaPic);
        })
        .catch((err) => {
          console.log(`Error: ${err}`);
        });
    };
    fetchData();
  }, [date]);

  console.log(nasaPic);
  if (nasaPic === "") {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="App">
      <Photo src={nasaPic.url} />
      <PhotoTitle title={nasaPic.title} />
      <PhotoDate date={nasaPic.date} />
      <PhotoDescription desc={nasaPic.explanation} />
      <DateDropdown onClick={newDate} />
    </div>
  );
}

export default App;
