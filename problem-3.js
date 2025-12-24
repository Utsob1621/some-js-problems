/*Problem-03 : Who will Win  ( 🥭Mango /🍌 Banana )*/ 

function electionResult(votes){
  if(!Array.isArray(votes)){
    return "Invalid"
}
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
// Winner result shit

  if(mangoCount > bananaCount){
    return "Mango"
  }

  else if(bananaCount > mangoCount){
    return "Banana"
  }
  else{
    return "Draw"
  }
}


const result = electionResult(["mango", "banana", "Na-Vote", "mango", "banana", "banana", "Na-Vote", "mango", "mango", "banana", "mango", "Na-Vote", "Na-Vote", "mango", "banana", "tomato"]);
console.log(result);



// Some sample input and sample output

// SAMPLE INPUT
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







