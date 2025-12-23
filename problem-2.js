/*Problem-02 : Detect email  valid or not*/ 

function validEmail(email){
  if(email !== 'string'){
    return false;
  }


  const invalidStartChars = ['.', '-', '_', '+', '@','number']
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
