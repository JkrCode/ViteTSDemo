const Cocktail: React.FC<any> = function ({ data, ingredients }) {
    const ingredientComponents = [];
  
    for (let i = 1; i <= 4; i++) {
      const ingredientKey = `strIngredient${i}`;
      const ingredientValue = data[ingredientKey];
  
      const Ingredient = () => {
        if (
          ingredients !== undefined &&
          ingredients.includes(ingredientValue)
        ) {
          return <p className="font-bold">{ingredientValue}</p>;
        } else {
          console.log(ingredients);
          return <p>{ingredientValue}</p>;
        }
      };
  
      ingredientComponents.push(<Ingredient key={ingredientKey} />);
    }
  
    return (
      <div className="flex mb-4">
        <p className="flex-none w-40 mr-4 h-16">{data.strDrink}</p>
        <div className="flex-col">{ingredientComponents}</div>
      </div>
    );
  };
  
  export default Cocktail;