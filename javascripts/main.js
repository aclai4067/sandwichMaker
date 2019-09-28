import bread from './components/bread.js';
import order from './components/order.js'

const init = () => {
    bread.printBreadList();
    order.createOrderButton();
};

init();