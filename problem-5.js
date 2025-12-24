/*Problem-05: Let’s Calculate Video watch Time*/


function calculateWatchTime(times){
  if(!Array.isArray(times)){
    return "Invalid";
  }

  if(times !== "number"){
    return "Invalid"
  }
}

const result = calculateWatchTime([100, 99, 119, 300]);
console.log(result);