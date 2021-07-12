let array = [2, 3, 5, 8];
let result = 1;
for(let i=0; i<array.length; i++){
  result=result*array[i];
}

console.log(`result= ${result}`);

let array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i=0; i<array2.length; i++){
  if(array2[i] > 5 && array2[i] < 10){
    console.log(array2[i]);
  }
}

let array3 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i=0; i<array2.length; i++){
  if(array3[i] % 2 == 0){
    console.log(array3[i]);
  }
}