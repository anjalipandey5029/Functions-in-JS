let Analyse = function (num) {
    
  if( num == 0  || num == 1){
    return "Not-Prime";
  }
  else {
  for (let i = 2; i<num; i++) {
   if (num % i === 0) {
      return "Not-Prime";
   }
    
  }
  return "Prime";
  }
}
console.log(Analyse(1));