const obj1 = {
  a: 'a',
  b: {
    a: 'a',
    b: 'b',
    c: {
      a: 1,
    },
  },
};
const obj2 = {
  b: {
    c: {
      a: 1,
    },
    b: 'b',
    a: 'a',
  },
  a: 'a',
};
const obj3 = {
  a: {
    c: {
      a: 'a',
    },
    b: 'b',
    a: 'a',
  },
  b: 'b',
};

const deepEqual = (object1, object2) => {
  if (object1 === object2) return true; 
  
  let keysA = Object.keys(object1), keysB = Object.keys(object2);

  if (keysA.length != keysB.length){
    return false;
  } 

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(object1[key], object2[key])) return false;
  }

    return true;

}

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false