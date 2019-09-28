import bread from './bread.js';
import cheese from './cheese.js';
import condiment from './condiment.js';
import meat from './meat.js';
import veggie from './veggie.js';
import utilities from '../helpers/utilities.js';

const createFinalOrder = (ingredients) => {
    let orderString = `
        <header class='col-12 text-center align-items-center'>
        <h2>Order Summary</h2>
        </header>
        <div class='col-sm-8'>
        <div class='summaryHeaders row'>
            <h4 class='col-7'>Ingredients</h4>
            <h4 class='col-3'>Price</h4>
        </div>
    `;
    let finalPrice = 0;
    for (let i = 0; i < ingredients.length; i++){
        orderString+=`
            <div class='summaryListing text-center row'>
                <h6 class='col-8'>${ingredients[i].type}</h6>
                <h6 class='col-4'>${(ingredients[i].price/100).toFixed(2)}</h6>
            </div>
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
    const cheeseSelection = cheese.getCheeseSelection();
    const condimentSelection = condiment.getCondimentSelection();
    const meatSelection = meat.getMeatSelection();
    const veggieSelection = veggie.getVeggieSelection();
    const wholeSandwich = breadSelection.concat(cheeseSelection, condimentSelection, meatSelection, veggieSelection);
    if (breadSelection[0].type){
        createFinalOrder(wholeSandwich);
        document.getElementById('placeOrder').innerHTML = 'Update Order';
        document.getElementById('placeOrder').classList.remove('btn-light');
        document.getElementById('placeOrder').classList.add('btn-outline-light')
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