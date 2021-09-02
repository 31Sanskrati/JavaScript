const hummus = function (factor) {
    /*The code inside the ingredient function can see the factor binding from
the outer function. But its local bindings, such as unit or ingredientAmount,
are not visible in the outer function.*/

    const ingredient = function (amount, unit, name) {
        let ingredientAmount = amount * factor;
        if (ingredientAmount > 1) {
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`);
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1, "clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

console.log(hummus(2));
/*  output--->
2 cans chickpeas
0.5 cup tahini
0.5 cup lemon juice
2 cloves garlic
4 tablespoons olive oil
1 teaspoon cumin
undefined
*/