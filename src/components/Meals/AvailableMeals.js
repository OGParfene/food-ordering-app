import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";


//class that contains the list of meals available and also renders every meal in a unique list item to be displayed
const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("https://react-http-movies-9f7a0-default-rtdb.firebaseio.com/meals.json");
            const responseData = await response.json();

            if(!response.ok){
                throw new Error("Something went wrong!")
            }

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    price: responseData[key].price,
                    description: responseData[key].description
                });
            };

            setMeals(loadedMeals);
            setIsLoading(false);
        };
        
        fetchMeals().catch((error)=>{
            setIsLoading(false);
            setHttpError(error.message)
        });

    }, []) //will only run when the component will run for the first time

    if (isLoading){
        return <section className={classes.MealsLoading}>
            <p>Loading...</p>
        </section>
    }

    if(httpError){
        return <section className={classes.mealsError}>
            <p>{httpError}</p>
        </section>
    }

    const mealsList = meals.map(meal =>
        <MealItem
            id={meal.id}
            key={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />);

    return <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
}

export default AvailableMeals;