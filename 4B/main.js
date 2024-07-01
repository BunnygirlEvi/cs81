function range(start, end) {
  let number_list = [];
  for (let i = start; i <= end; i++) {
    number_list.push(i);
  }
  return number_list;
}

function sum(...array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

//console.log(range(1, 5));

console.log(sum(...range(1, 10)));
