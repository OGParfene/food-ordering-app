import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";


//class that contains the personalized button from the header.
//It contains the span with the Cart Icon, the span w/ the name of the cart and the number of elements
const HeaderCartButton = (props) => {
    const [btnHighlighted, setBtnHighlighed] = useState(false);
    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0);

   

    const buttonClasses = `${classes.button} ${btnHighlighted ?  classes.bump : ""}`

    useEffect(()=>{
        if(items.length === 0){
            return;
        }
        
        setBtnHighlighed(true);

        const timer = setTimeout(() => {
            setBtnHighlighed(false)
        }, 300);

        return () => {
            clearTimeout(timer);
        };
    }
    ,[items]);

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;