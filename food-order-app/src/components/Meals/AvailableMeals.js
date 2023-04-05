import { useEffect, useState } from "react";

import { Card } from "../UI/Card";
import { MealItem } from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

export const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    fetch("https://react-http-3a7fa-default-rtdb.firebaseio.com/meals.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Oops, seomthing went wrong.");
        }

        return response.json();
      })
      .then((data) => {
        const loadedMeals = [];

        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            description: data[key].description,
            price: data[key].price,
          });
        }

        setMeals(loadedMeals);
        setIsLoading(false);
      })
      .catch((error) => {
        setHttpError(error.message);
        setIsLoading(false);
        console.log("Your request failed: ", error);
      });
  }, []);

  if (isLoading) {
    return (
      <section className={classes.mealsloading}>
        <p>loading....</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.loadingerror}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};
