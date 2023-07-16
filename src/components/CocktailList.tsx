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
}

const CocktailList: React.FC <Props> = function({data}){

    const ListOfCocktails = data.map((item: Drink)=>{
        return <Cocktail key={item.strDrink} data={item}></Cocktail>
    })

    return <div>
        {ListOfCocktails}
    </div>
}

export default CocktailList;