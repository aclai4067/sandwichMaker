import bread from './bread.js';
// import cheese from './cheese.js';
// import condiment from './condiment.js';
// import meat from './meat.js';
// import veggie from './veggie.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (ingredients) => {
    let orderString = `
        <h2 class='col-12 text-center'>Order Summary</h2>
        <div class='col-sm-8 text-center row'>
            <h4 class='col-8'>Ingredients</h4>
            <h4 class='col-4'>Price</h4>
    `;
    let finalPrice = 0;
    for (let i = 0; i < ingredients.length; i++){
        orderString+=`
            <h6 class='col-8'>${ingredients[i].type}</h6>
            <h6 class='col-4'>${(ingredients[i].price/100).toFixed(2)}</h6>
        `
        finalPrice += ingredients[i].price;
    };
    orderString+=`
        </div>
        <i class="fas fa-bread-slice text-center col-sm-4 priceBreadSlice"><h3 class='priceText text-center'>Total:<br />$${(finalPrice/100).toFixed(2)}</h3></i>
    `;
    utilities.printToDom('orderSummary', orderString);
};

const orderEvent = () => {
    const breadSelection = bread.getBreadSelection();
    // const cheeseSelection = cheese.getBreadSelection();
    // const condimentSelection = condiment.getBreadSelection();
    // const meatSelection = meat.getBreadSelection();
    // const veggieSelection = veggie.getBreadSelection();
    // const wholeSandwich = breadSelection.concat(cheeseSelection);
    if (breadSelection[0].type){
        createFinalOrder(breadSelection);
    };
};

const createOrderButton = () => {
    const buttonString = `
        <button type="submit" id='placeOrder' class="btn btn-light">Build Order</button>
    `;
    utilities.printToDom('btnDiv', buttonString);
    document.getElementById('placeOrder').addEventListener('click', orderEvent);
};

export default { createOrderButton };