import React, { useState, useEffect } from "react";
import Photo from "./components/Photo";
import PhotoTitle from "./components/PhotoTitle";
import PhotoDescription from "./components/PhotoDescription";
import PhotoDate from "./components/PhotoDate";
import "./App.css";
const axios = require("axios");
const apiKey = "5uWkEnwSm2ygUVGF51iuPAiwWhJViiJlWoRgmhJ1";

function App() {
  const [nasaPic, setNasaPic] = useState("");

  // useEffect(()=> {
  //   console.log("This works")
  // }, [])

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(res => {
          setNasaPic(res.data);
          console.log(nasaPic);
        })
        .catch(err => {
          console.log(`Error: ${err}`);
        });
    };
    fetchData();
  }, []);

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
    </div>
  );
}

export default App;
