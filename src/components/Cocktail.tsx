
const Cocktail: React.FC <any> = function({data}){
    return (
        <div className="flex mb-4">
            <p className="flex-none w-40 mr-4 h-16">{data.strDrink}</p>
            <div className="flex-col">   
                <p>{data.strIngredient1}</p>
                <p>{data.strIngredient2}</p>
                <p>{data.strIngredient3}</p>
                <p>{data.strIngredient4}</p>
            </div>
        </div>
    )
}

export default Cocktail;