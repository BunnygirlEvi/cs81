function checker(string, letter) {
  return string.split("").filter((a) => a === letter).length;
  let counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(checker("singing", "z"));
