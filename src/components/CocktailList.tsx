import Cocktail from "./Cocktail"
import Drink from "./Interfaces/Drink"

interface CocktailListProps {
    data: Drink[];
    ingredients: string[]
}

const CocktailList: React.FC <CocktailListProps> = function({ data, ingredients }){

    const ListOfCocktails = data.map((item: Drink, index:number)=>{
        
        return <Cocktail key={index} ingredients={ingredients} data={item}></Cocktail>
    })

    return <div>
        {ListOfCocktails}
    </div>
}

export default CocktailList;