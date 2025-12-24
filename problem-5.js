/*Problem-05: Let’s Calculate Video watch Time*/


function calculateWatchTime(times){
  if(!Array.isArray(times)){
    return "Invalid";
  }
  

  let allNumbers = times.every(el => typeof el === "number" && !Number.isNaN(el));
  if(!allNumbers){
    return "Invalid"
  }

  let totalSeconds = times.reduce((sum, el) => sum + el, 0);

  let hour = Math.floor(totalSeconds / 3600);
  let minute = Math.floor((totalSeconds % 3600) / 60);
  let second = totalSeconds % 60;

  return {hour, minute, second};
}


const result = calculateWatchTime([100, 99, 119, 300]);
console.log(result);