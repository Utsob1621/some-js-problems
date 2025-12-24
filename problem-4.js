/*Problem-04: Detect The Perfect Best Friend*/ 

friend1Details = {name : "Bidhan Saha", roll : 1, bestFriend : 2}

friend2Details = {name : "Borson Saha", roll : 2, bestFriend : 1}


function isBestFriend(f1, f2){
    if(f1.roll === f2.bestFriend && f2.bestFriend === f1.roll){
      return true
    }
}


const result = isBestFriend(friend1Details, friend2Details);
console.log(result);


