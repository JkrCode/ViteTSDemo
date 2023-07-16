import { useState } from "react";

const IngredientPicker:React.FC<any> = function({ingredients, setIngredients}){
    const [inputIngredient, setInputIngredient] = useState("");

    const handleChange = (event:any)=> {
        setInputIngredient(event.target.value)
    }
    const handleClick = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIngredients((prevIngredients: string[]) => [
          ...prevIngredients,
          inputIngredient,
        ]);
        setInputIngredient("");
      };

    const listOfIngredients = ingredients.map((ingredient:string)=>{
        return <div key={ingredient}>
            {ingredient}
        </div>
    })
    

    return (
        <div>
            <div>{listOfIngredients}</div>
            <form onSubmit={handleClick}>
                <input className="rounded border-2" onChange={handleChange} value={inputIngredient}></input>
            </form>
        </div>
    )
}
export default IngredientPicker;