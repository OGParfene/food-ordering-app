import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";


//class that represents all the meal content in the page. Represents the description and the meal list of items available
const Meals = () => {
    return <React.Fragment>
        <MealsSummary />
        <AvailableMeals />
    </React.Fragment>
}

export default Meals;