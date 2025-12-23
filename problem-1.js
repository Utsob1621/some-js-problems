/*Problem-01 : Calculate the cash-out Charge*/ 

function cashOut( money ) {

  if( typeof money !== "number" || !Number.isFinite(money) || money < 0){
    return 'Invalid amount! Please enter a positive number.';
  }
    const charge = money * 1.75 / 100;
    return charge;

}

const result = cashOut(-1);
console.log(result);







// function cashOut(money) {
//   // Validate: number, finite, positive
//   if (typeof money !== 'number' || !Number.isFinite(money) || money <= 0) {
//     return 'Invalid amount! Please enter a positive number.';
//   }

//   const charge = (money * 1.75) / 100;
//   return charge; // e.g., 2000 => 35
// }







