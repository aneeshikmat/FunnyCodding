/*
* Given a non-negative integer x, compute and return the square root of x.
* Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0 || x === 1){
        return x;    
    }
    
    let nearstSqrtSequane = x - 1;
    let nearstSqrt = Math.ceil(x / 4);
    let nearstSqrtValue = nearstSqrt * nearstSqrt;
    
    do{
        let substractSqrt =  Math.ceil((nearstSqrtValue - x) / nearstSqrtSequane);
        nearstSqrt = nearstSqrt - substractSqrt; 
        nearstSqrtSequane = nearstSqrt * 2;
        nearstSqrtValue = nearstSqrt * nearstSqrt;
    }while (nearstSqrtValue > x);
    
    return nearstSqrt;
};
