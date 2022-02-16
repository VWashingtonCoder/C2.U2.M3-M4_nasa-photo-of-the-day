import React, {useEffect} from "react";
import "./App.css";
import { useState } from "react";
import axios from "axios";
import {BASE_URL, API_KEY} from './constants/constants'
import Header from "./components/header"

function App() {
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [mediaType, setMediaType] = useState("")
  const [copyright, setCopyright] = useState("");
  const [explain, setExplain] = useState("");


  useEffect(() => {
    axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setDate(res.data.date);
        setTitle(res.data.title);
        setMediaUrl(res.data.url);
        setMediaType(res.data.media_type);
        setCopyright(res.data.copyright);
        setExplain(res.data.explanation);
      })
      .catch(err => console.error(err));
  }, [])
  
  return (
    <div className="App">
      <h1>Today...IN SPACE!!!</h1>
      <Header date={date}/>
      <link></link>
    </div>
  );
}

export default App;
