import React from "react"

const MediaText = props => {
    return(
        <div className="media-text-container">
        <h3>{props.title}</h3>
        <h4> Credit And Copyright: {props.copyright}</h4>
        {props.explain}
        </div>
        
    )
}

export default MediaText