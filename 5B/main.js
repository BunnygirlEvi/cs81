function evensOnly(arr) {
  let newArray = [];
  newArray = arr.filter((a) => (a % 2 === 0 ? true : false));
  return newArray;
}

// test
console.log(evensOnly([3, 5, 6, 8, 2, 11, 12])); /// [6, 8, 2]
