import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    background-color: ${props => props.theme.blue};
    margin: 1rem 3rem 2rem;
    padding: 2px 0 1px;
    h2{
        font-size: 25px;
        line-height: 35px;
    }

`

const Header = props => {
    return (
        <StyledHeader className="header">
            <h1>NASA: TODAY IN SPACE!!!</h1>
            <h2>Every Day Is A Beautiful Adventure Out In<br/>The Deep Reaches Of Space.</h2>
            <h2>Today's Date:</h2>
            <h3>{props.date}</h3>
        </StyledHeader>
    )
}

export default Header