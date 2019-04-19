'use strict';

class LargestProduct {
  constructor(number) {
    this.myNum = number;
    this.highest = {
      product : 0,
      position : 0,
    };
  }

  getLargestProductPosition(){
    //returns the position of the largest product of 5 consecutive numbers found in the 1000-digit number. 
    //count to the fifth position.
    
    let temp = this.myNum.split('');
    let factors = [];
    let products = [];
    temp.forEach((member, index) => {
      factors.push(member);
      if (factors.length === 5){
        let product = 1;
        factors.forEach((member) => {
          product *= parseFloat(member);
        });
        products.push(product);
        }
      // if (factors.length > 5){
      //   factors.shift();
      //}
    });
    console.log(products.length);
   
  }

  getLargestProduct(){
    
    //returns the value of the largest product of 5 consecutive numbers found in the 1000-digit number.
  }
}

module.exports = LargestProduct;
