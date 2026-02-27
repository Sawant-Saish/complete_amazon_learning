import { renderOrderSummary } from "./checkout/orderSummary.js"; 
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadproducts ,loadProductsFetch} from "../data/products.js";
import {loadCart} from '../data/cart.js';
//import '../data/carts-class.js';
//import '../data/backend-practice.js';

async function loadPage(){     // async makes the the function return promise

    await loadProductsFetch();  // await make the code like normal (step by step) i.e waits for this line to execute before moving forword
    
    const value = await new Promise((resolve)=>{    // we can only use await inside the async function
        loadCart(() => {
            resolve("value3");
        });
    })

    renderOrderSummary(); 
    renderPaymentSummary(); 
                                // rather than using nested statements in then 
}
loadPage();

/*
Promise.all([
    loadProductsFetch(),
    new Promise((resolve)=>{
        loadCart(() => {
            resolve();
        });
    })
]).then(()=>{
        renderOrderSummary(); 
        renderPaymentSummary();     
    });


    */



/*


new Promise((resolve)=>{
    loadProductsFetch(() => {
        resolve();
    });
}).then(()=>{
    renderOrderSummary(); 
    renderPaymentSummary();     
});



*/




// this promise does the same thing as the below callback function which is it waits for the loadproducts to load before moving to next steps i.e renderOrdersummary and renderPaymentSummary. 

// promise and callback both makes the async flow to be in sync.

//  Promises allows us avoid nesting and helpls us keep the code clean. 
// it still has features like promise.all() which lets us run multiple promises at the same time. 



/*
loadproducts(()=>{
    renderOrderSummary(); 
    renderPaymentSummary();
});
*/