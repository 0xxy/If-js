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

  if (object1 == null, typeof object1 != 'object' || object2 == null, typeof object2 != 'object'){
    return false;
  }
  
 const firstObj = Object.keys(object1);
 const secondObj = Object.keys(object2);

  if (firstObj.length != secondObj.length){
    return false;
  } 

  for (let key of firstObj) {
    if (!secondObj.includes(key) || !deepEqual(object1[key], object2[key])) return false;
  }

    return true;

}

console.log(deepEqual(obj1, obj2)); // true
console.log(deepEqual(obj1, obj3)); // false