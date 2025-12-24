/*Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )*/ 

function electionResult(votes){
  if(!Array.isArray(votes)){
    return "Invalid"


    let mangoCount = 0;
    let bananaCount = 0;
    for(let vote of votes){
      if(vote === "mango"){
        mangoCount++;
      }

      else if(vote === "banana"){
        bananaCount++;
      }
    }
  }

}


const result = electionResult(["mango", "banana", "Na-Vote", "mango", "banana", "banana", "Na-Vote", "banana", "mango", "Na-Vote", "Na-Vote", "mango", "banana", "tomato"]);
console.log(result);






