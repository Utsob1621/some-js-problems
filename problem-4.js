/*Problem-04: Detect The Perfect Best Friend*/ 

friend1Details = {name : "Bidhan Saha", roll : 1, bestFriend : 2}

friend2Details = {name : "Borson Saha", roll : 2, bestFriend : 1}


function isBestFriend(f1, f2){

  if(typeof f1 !== "object" || typeof f2 !== "object" || f1 === null || f2 === null){
    return "Invalid";
  }


  if(!("name" in f1 && "roll" in f1 && "bestFriend" in f1) || !("name" in f2 && "roll" in f2 && "bestFriend" in f2 )){
    return false;
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


