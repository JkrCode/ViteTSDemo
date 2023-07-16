import axios from "axios";
import IngredientPicker from "./components/IngredientPicker";
import { useState } from "react";
import CocktailList from "./components/CocktailList";

function App() {

const [drinks, setDrinks] = useState([]);

const [ingredients, setIngredients] = useState([]);


async function handleClick () {
  const data = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
  setDrinks(data.data.drinks);
}

  
  return (
    <div className="m-4 flex-col">

      <div className="flex justify-center">
        <h1 className="text-xl italic font-bold mb-4 ">Cocktailfinder</h1>
      </div>
      <div className="flex flex-row justify-center">
          <IngredientPicker ingredients={ingredients} setIngredients={setIngredients} />
          <CocktailList ingredients={ingredients} data={drinks}/>
      </div>
      <div className="flex justify-center">
        <button onClick={handleClick}>get drinks</button>

      </div>

    </div>
      
  )
}

export default App
