import React from "react"


function FilterFoods({setFilter}){
   // let [filterBy, setFilterBy] = useState("ALL");
    
    
    const handleChange = (e) => {
        console.log("Select your dish : ", e.target.value)
        setFilter(e.target.value)
    }

//       const foodsToDisplay = foods.filter(food =>{
//     if (filterBy === "ALL"){
//       return true
//     } else {
//       return food.cuisine === filterBy
//     }
//   })


    return (
        <>
            <h1>Hello Ladies and Gents</h1>
            <select name="filter" onChange={handleChange}>
                <option value="All">ALL</option>
                <option value="American">American</option>
                <option value="Sishuan">Sishuan</option>
                <option value="Thai">Thai</option>
                <option value="Mexican">Mexican</option>
            </select>
        </>

    )
}
export default FilterFoods;

//we dont need to pass in an anonymous function to an onChange event. However the function itself we pass in the event as a param to console it and capture the user input to be stored or displayed to the DOM