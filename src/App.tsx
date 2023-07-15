import axios from "axios";
import IngredientPicker from "./components/IngredientPicker";
import { useState } from "react";
import CocktailList from "./components/CocktailList";


function App() {

const [drinks, setDrinks] = useState([]);

async function handleClick () {
  const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  setDrinks(data.data.drinks);
}

  
  return (
      <div>
        <IngredientPicker />
        <CocktailList data={drinks}/>
        <button onClick={handleClick}>get drinks</button>
      </div>
  )
}

export default App
