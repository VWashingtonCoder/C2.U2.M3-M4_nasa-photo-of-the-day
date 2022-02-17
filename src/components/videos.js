import React, {useState, useEffect} from "react";
import axios from "axios";
import {BASE_URL, API_KEY} from '../constants/constants';

const Videos = props => {
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
            <video width="750" height="500" controls >
                <source src={mediaUrl} type={props.mediaType}/>
            </video>
        </div>
    )
}

export default Videos