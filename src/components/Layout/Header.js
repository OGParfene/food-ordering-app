import React from "react";
import classes from "./Header.module.css";
import mealsImage from "./../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";


//class that contains the header of the app. It has the main red header with the personalized Button and the image below 
//the red header.
const Header = (props) => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1> Octavian's Meals </h1>
            <HeaderCartButton onClick={props.onShowCart}/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food!" />
        </div>
    </React.Fragment>
}

export default Header;
