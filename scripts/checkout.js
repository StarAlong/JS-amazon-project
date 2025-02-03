import {renderOrderSummary} from './checkout/orderSummary.js';
import {renderPaymentSummary} from './checkout/paymentSummary.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import {loadProducts, loadProductsFetch} from '../data/products.js';
import {loadCart} from '../data/cart.js';

async function loadPage() {
    console.log('load page');
    return 'value2';
}


Promise.all([
    loadProductsFetch(),
    new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })    

]).then((values) => {
    renderOrderSummary();
    renderPaymentSummary();
});




/*
new Promise((resolve) => {
    loadProducts(() => {
        resolve();
    });
}).then(()=> {
    renderOrderSummary();
    renderPaymentSummary();
});
*/
