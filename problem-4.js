/*Problem-04: Detect The Perfect Best Friend*/ 

friend1Details = {name : "Bidhan Saha", roll : 1, bestFriend : 2}

friend2Details = {name : "Borson Saha", roll : 2, bestFriend : 11}


function isBestFriend(f1, f2){

  if(typeof f1 !== "object" || typeof f2 !== "object" || f1 === null || f2 === null){
    return "Invalid";
  }


  
    if(f1.roll === f2.bestFriend && f2.bestFriend === f1.roll){
      return true;
    }
    else{
      return false;
    }
}


const result = isBestFriend(friend1Details, friend2Details);
console.log(result);


