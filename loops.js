function forLoop(array){
   for (var i = 0; i < 26; i++){
     if (i === 1){
       array.push("I am 1 strange loop.")
     }
     else if (i < 25) {
      array.push(`I am ${i} strange loops.`)
   } else {
     return array
   }
 }
}

arr = []
forLoop(arr)
console.log(arr)


function whileLoop(number){
  while (number > 0){
    if(number === 1){
      console.log('done')
      return 'done'
    number--
    } else {
    console.log(number--);
    }
 }
}

whileLoop(5)

function incrementVariable(i) {
  i = i + 1;
  return i;
}

do {
  console.log("doo-bee-doo-bee-doo");
} while (incrementVariable(2) < 5);



