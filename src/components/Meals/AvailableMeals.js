import React from "react";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pulled Pork Sandwich",
    description: "Tender pulled pork piled high on a bun and served with coleslaw.",
    price: 22.99,
  },
  {
    id: "m2",
    name: "St. Louis Style Ribs",
    description: "Tender ribs seasoned with a dry rub and smoked to perfection.",
    price: 25.99,
  },
  {
    id: "m3",
    name: "Brisket",
    description: "Slow-smoked beef brisket served sliced or chopped with BBQ sauce on the side.",
    price: 24.99,
  },
  {
    id: "m4",
    name: "Smoked Chicken",
    description: "Juicy smoked chicken quarters or halves with a choice of BBQ sauce.",
    price: 20.99,
  },
  {
    id: "m5",
    name: "BBQ Sampler Platter",
    description: "A selection of smoked meats including ribs, brisket, pulled pork, and chicken wings.",
    price: 29.99,
  },
  {
    id: "m6",
    name: "BBQ Platter",
    description: "A customizable platter with a choice of two or three meats served with sides.",
    price: 27.99,
  },
];


const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meal}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
