import Cocktail from "./Cocktail"

interface Drink {
    strDrink:string,
    strIngredient1: string,
    strIngredient2: string,
    strIngredient3: string,
    strIngredient4: string,
}

interface Props {
    data: Drink[];
    ingredients: string[]
}

const CocktailList: React.FC <Props> = function({data, ingredients }){

    const ListOfCocktails = data.map((item: Drink)=>{
        
        return <Cocktail key={item.strDrink} ingredients={ingredients} data={item}></Cocktail>
    })

    return <div>
        {ListOfCocktails}
    </div>
}

export default CocktailList;