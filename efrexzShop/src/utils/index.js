/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct: Array of Objects
 * @returns {number} Total price
 */

function totalPrice (products){//funcion para sumar el precio total de los items
    let sum = 0;

    products.forEach(product => {
        sum += product.price
    });

    return sum;
}

export {totalPrice};