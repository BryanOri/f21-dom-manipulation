/* Lines 1-8 contain code for plate setup and should not be modified! */
setPlate(document.querySelector("#plate-two"));

let p2TopBurgerBun = getNewTopBurgerBun();
let p2BaconStrips = getNewBaconStrips();

addIngredientToBottom(p2TopBurgerBun);
addIngredientToBottom(p2BaconStrips);

/*
Add your code below this comment to finish creating the following sandwich:

- Top Burger Bun
- Bacon Strips
- Cheese Slice
- Chicken Patty
- Bottom Burger Bun

Note: To finish creating your sandwich, use
        "addIngredientToTop", "addIngredientToBottom",
        "changeIngredient", and/or "removeIngredient"
*/
removeIngredient(p2TopBurgerBun);
removeIngredient(p2BaconStrips);
addIngredientToTop(p2TopBurgerBun);
addIngredientToBottom(p2BaconStrips);
let p2cheese = getNewCheeseSlice();
let p2chicken = getNewChickenPatty();
let p2bottomBun = getNewBottomBurgerBun();
addIngredientToBottom(p2cheese);
addIngredientToBottom(p2chicken);
addIngredientToBottom(p2bottomBun);
