/*const isBigger = (b) => (a, b) => a > b;
const higherIsBigger = (b) => (a) => a > b;

isGpaGood = (gpa) => isBigger(gpa, 3); // higherIsBigger(3)

z = higherBigger(3);

z(4);
z(5)[(1, 2, 3, 4, 5)].filter((a) => a > 2); // [3,4,5]
*/
const filter1 = (arr, fn) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    let temporary = arr[i];
    console.log(temporary + " is temporary");
    if (fn(temporary)) {
      newArr.push(temporary);
      console.log(newArr + " is newArr");
    }
  }
  return newArr;
};

//console.log(filter1([1, 2, 3, 4], (a) => a > 2));

const map1 = (arr, fn) => {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    let newTemporary = arr[i];
    console.log(newTemporary + " is newTemporary");
    let itemAdded = fn(newTemporary);
    console.log(itemAdded + " is itemAdded");
    newArr.push(itemAdded);
    console.log(newArr + " is newArr");
  }
  return newArr;
};

// console.log([1, 2, 3, 4, 5].ma((a) => a + 2));
//console.log(map1([1, 2, 3, 4, 5], (a) => a + 2));

const arr = [1, 10, 100, 500];
console.log(arr.filter(filterFn).map(mapFn));
const filterFn = (a) => a > 10;
const mapFn = (a) => a * 2;

const mapFilter = (arr, filterFn, mapFn) => {
  let newArr = [];
  let newerArr = [];
  for (let i = 0; i < arr.length; i++) {
    let temporary = arr[i];
    if (filterFn(temporary)) {
      newArr.push(temporary);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    let newTemporary = newArr[i];
    let itemAdded = mapFn(newTemporary);
    newerArr.push(itemAdded);
    console.log(itemAdded);
  }
  return newerArr;
};

console.log(mapFilter(arr, filterFn, mapFn));
