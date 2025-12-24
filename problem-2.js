/*Problem-02 : Detect email  valid or not*/ 

function validEmail(email){
  if(typeof email !== 'string'){
    return false;
  }


  const invalidStartChars = ['.', '-', '_', '+', '@']
  if(invalidStartChars.includes(email[0])){
    return false;
  }

  if(!email.includes('@')){
    return false;
  }

  if(email.includes(' ')){
    return false;
  }

  if(!email.includes('.com')){
    return false;
  }

  return true;
}


const result = validEmail("utsobsaha9074@gmail.com");
console.log(result);


\// SAMPLE INPUT
// ["mango", "banana", "mango", "banana", "mango"]
// SAMPLE OUTPUT
// "Mango"
// SAMPLE INPUT
// []
// SAMPLE OUTPUT
// "Draw"
// SAMPLE INPUT
// ["mango", "banana", "jaker party" , "no"]
// SAMPLE OUTPUT
// "Draw"
// SAMPLE INPUT
// ["mango"]
// SAMPLE OUTPUT
// "Mango"
// SAMPLE INPUT
// ["banana", "banana", "age e valo chilam" , "no"]
// SAMPLE OUTPUT
// "Banana"
// SAMPLE INPUT
// {result: "mango , banana ,  mango"}
// SAMPLE OUTPUT
// "Invalid"
// SAMPLE INPUT
// "mango , banana"
// SAMPLE OUTPUT
// "Invalid"
// SAMPLE INPUT
// ["mango", "BananA", "na vote", "na vote"]
// SAMPLE OUTPUT
// "Mango"
