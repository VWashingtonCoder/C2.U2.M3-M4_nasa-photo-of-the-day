import axios from "axios";
import React, { useState, useEffect } from "react";
import {BASE_URL, API_KEY} from '../constants/constants';

const Images = props => {
    const [mediaUrl, setMediaUrl] = useState("");

    useEffect(() => {
        axios.get(`${BASE_URL}${API_KEY}`)
      .then(res => {
        setMediaUrl(res.data.url);
      })
      .catch(err => console.error(err));
  }, []);
    
    return (
        <div className="container-media">
            <img src={mediaUrl} alt={props.mediaType} width={500} height={250}/>
        </div>
    )
}

export default Images