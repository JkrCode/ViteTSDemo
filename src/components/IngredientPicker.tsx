const IngredientPicker:React.FC<any> = function(){
    return (
        <div className="flex flex-col">
            
                <div className="flex-none w-24">
                    <p>Zitrone</p>
                    <input type="checkbox"></input>
                </div>
                <div className="flex-none w-24">
                    <p>Orange</p>
                    <input type="checkbox"></input>
                </div>
                <div className="flex-none w-24">
                    <p>Limette</p>
                    <input type="checkbox"></input>
                </div>
            
        </div>
    )
}
export default IngredientPicker;