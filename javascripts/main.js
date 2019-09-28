import bread from './components/bread.js';
import cheese from './components/cheese.js';
// import condiment from './components/condiment.js';
import order from './components/order.js';
import meat from './components/meat.js';
import veggie from './components/veggie.js';


const init = () => {
    bread.printBreadList();
    cheese.printCheeseList();
    order.createOrderButton();
    meat.printMeatList();
    veggie.printVeggieList();
};

init();