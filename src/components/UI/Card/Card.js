import React from "react";
import classes from "./Card.module.css";

//classes that contains a container named Card, it will be used to wrap elements
const Card = (props) => {
    return <div className={classes.card}>
        {props.children}
    </div>
}

export default Card;