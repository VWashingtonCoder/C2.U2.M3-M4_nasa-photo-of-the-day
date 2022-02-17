import React, {useEffect} from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import {BASE_URL, API_KEY} from './constants/constants'
import Header from "./components/header"
import Videos from "./components/videos"
import Images from "./components/images";
import MediaText from "./components/mediatext"

function App() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [mediaType, setMediaType] = useState("")
  const [copyright, setCopyright] = useState("");
  const [explain, setExplain] = useState("");


  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setDate(res.data.date);
        setTitle(res.data.title);
        setMediaType(res.data.media_type)
        setCopyright(res.data.copyright);
        setExplain(res.data.explanation);
        console.log(res)
      })
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className="App">
      <h1>NASA Today...IN SPACE!!!</h1>
      <Header date={date}/>
      {mediaType === "video" ? <Videos/> : <Images/>}
      <MediaText title={title} copyright={copyright} explain={explain}/>
      <a href="https://apod.nasa.gov/apod/archivepix.html">Check The Archives To See Your Birthday Astronomy Pics!</a>
    </div>
  );
}

export default App;
