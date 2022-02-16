import React from "react";

const Header = props => {
    return (
        <div className="header">
            <h3>Every day is a beautiful adventure out in the deep reaches of space.</h3>
            <p>Today's Date:</p>
            {props.date}
        </div>
    )
}

export default Header