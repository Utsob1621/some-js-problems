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

