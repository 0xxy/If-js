const array = [2, 3, 5, 8];
let result = 1;
for(let i = 0; i < array.length; i++){
  result *= array[i];
}

console.log(`result= ${result}`);

const array2 = [2, 5, 8, 15, 0, 6, 20, 3];
for(let i = 0; i < array2.length; i++){
  if(array2[i] > 5 && array2[i] < 10){
    console.log(array2[i]);
  }
}

for(let i = 0; i < array2.length; i++){
  if(array2[i] % 2 === 0){
    console.log(array2[i]);
  }
}