import React, { useState } from "react";
import { spicyFoods, getNewSpicyFood } from "../data";
//import FilterFoods from "./FilterFood";

function SpicyFoodList() {
  let [foods, setFoods] = useState(spicyFoods);
  let [filterBy, setFilterBy] = useState("ALL");


  function handleAddFood() {
    const newFood = getNewSpicyFood();
    console.log("After adding new food item: " , newFood);
// See Comments Below
     setFoods([...foods, newFood])
     console.log("Before adding a new food item: " , foods)
  }

    const removeItem = (id) => {
      console.log("Remove food item : ", id)
// See Comments Below
    const removeFood = foods.filter(food => food.id !== id)
      setFoods(removeFood)
      console.log("Before removing a food item from setFoods: " , foods)
     }

    const updateHeat = (id ) => {
      //console.log( `Updating Heat level : ` , food, `:`, heatLevel)

      const incrementHeat = foods.map(food => {
        console.log(food.heatLevel)
        if (food.id === id) {
          return {
            ...food,
            heatLevel: food.heatLevel + 1,
          };
        } else {
          return food
        }
      })
        setFoods(incrementHeat)
    }

    const handleChange = (e) => {
      console.log("Select your dish : ", e.target.value)
      setFilterBy(e.target.value)
    }

    const foodsToDisplay = foods.filter((food) => {
      if (filterBy.includes( "All")) {
        return (  <li key={food.id}>
        {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
      </li>)
      } else {
        return food.cuisine === filterBy;
      }
    });

// See Comments Below

  const foodList = foodsToDisplay.map(food => (
    <li key={food.id}>
      <span onClick={() => removeItem(food.id)}>Dish: {food.name}</span> | <span onClick={() => updateHeat(food.id)}>Heat: <strong>{food.heatLevel}</strong></span>  | Cuisine:{food.cuisine}
    </li>
  ))

  return (
    <div>
            <h1>Hello Ladies and Gents</h1>
      <select name="filter" onChange={handleChange}>
          <option value=""></option>
          <option value="All">ALL</option>
          <option value="American">American</option>
          <option value="Sishuan">Sishuan</option>
          <option value="Thai">Thai</option>
          <option value="Mexican">Mexican</option>
      </select>
      <hr/>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;


/**
 * Line 10: Using the spread op to make a copy of our foods arr, & insert it into a new array. Then adding the newly generated food (getNewSpicyFood) at the end of that array.
 * 
 * Line 17: Writing a cb func in .filter to look for all foods except the number we're trying to remove, we'll get back a new, shortened list of foods and pass that new array in setFoods
 * 
 * 
 * Line 27: When a user clicks on a food, that food should be removed from the list.First, we'll need to add a click handler to the <li> elements, and pass in the id of the food we're trying to remove:
 */