/* Lines 1-16 contain code for plate setup and should not be modified! */
setPlate(document.querySelector("#plate-three"));

let p3TopBurgerBun = getNewTopBurgerBun();
let p3TomatoSlice = getNewTomatoSlice();
let p3LettuceLeaf = getNewLettuceLeaf();
let p3CheeseSlice = getNewCheeseSlice();
let p3ChickenPatty = getNewChickenPatty();
let p3BottomBurgerBun = getNewBottomBurgerBun();

addIngredientToBottom(p3TopBurgerBun);
addIngredientToBottom(p3TomatoSlice);
addIngredientToBottom(p3LettuceLeaf);
addIngredientToBottom(p3CheeseSlice);
addIngredientToBottom(p3ChickenPatty);
addIngredientToBottom(p3BottomBurgerBun);

/*
Add your code below this comment to finish creating the following sandwich:
- Toast
- Tomato
- Lettuce
- Bacon Strips
- Toast

Note: To finish creating your sandwich, use
        "addIngredientToTop", "addIngredientToBottom",
        "changeIngredient", and/or "removeIngredient"
*/
removeIngredient(p3TopBurgerBun);
removeIngredient(p3TomatoSlice);
removeIngredient(p3LettuceLeaf);
removeIngredient(p3CheeseSlice);
removeIngredient(p3ChickenPatty);
removeIngredient(p3BottomBurgerBun);

let c3toast = getNewToast();
let c3tomato = getNewToast();
let c3lettuce = getNewLettuceLeaf();
let c3bacon = getNewBaconStrips();

addIngredientToTop(c3toast);
addIngredientToBottom(c3tomato);
addIngredientToBottom(c3lettuce);
addIngredientToBottom(c3bacon);
addIngredientToBottom(c3toast);
