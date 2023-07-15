interface Props {
    data: Array<{
        strDrink:string
    }>
}

const CocktailList: React.FC <Props> = function({data}){

    const ListOfCocktails = data.map((item)=>{
        return <div key={item.strDrink}>{item.strDrink}</div>
    })

    return <div>
        {ListOfCocktails}
    </div>
}

export default CocktailList;