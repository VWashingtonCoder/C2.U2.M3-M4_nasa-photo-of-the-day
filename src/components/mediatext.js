import React from "react"
import styled from "styled-components";

const StyledMediaText = styled.div`
    background-color: ${props => props.theme.blue};
    width: 85%;
    margin:2rem 0 2rem 4rem;
    padding: 1rem;
`


const MediaText = props => {
    return(
        <StyledMediaText className="media-text-container">
        <h3>{props.title}</h3>
        <h4> Credit And Copyright: {props.copyright}</h4>
        {props.explain}
        </StyledMediaText>
    )
}

export default MediaText