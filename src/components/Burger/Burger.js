import React from "react";

import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  // create array of key
  let transformedIngredients = Object.keys(props.ingredients)
    .map(key => {
      // create new array from amount key
      // props.ingredients[key] is a Number
      return [...Array(props.ingredients[key])].map((_, i) => {
        return <BurgerIngredient key={key + i} type={key} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type={`bread-top`} />
      {transformedIngredients}
      <BurgerIngredient type={`bread-bottom`} />
    </div>
  );
};

export default Burger;
