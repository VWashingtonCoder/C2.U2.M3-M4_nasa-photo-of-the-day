import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: ${props => props.theme.blue};
    margin: 1rem 3rem 2rem;
    padding: 2px 0 1px;
    

`

const Header = props => {
    return (
        <StyledHeader className="header">
            <h1>NASA: TODAY IN SPACE!!!</h1>
            <h2>Every Day Is A Beautiful Adventure Out In<br/>The Deep Reaches Of Space.</h2>
            <h3>Today's Date:</h3>
            <h4>{props.date}</h4>
        </StyledHeader>
    )
}

export default Header