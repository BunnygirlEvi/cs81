function fizzbuzz() {
  for (let control = 1; control <= 120; control++) {
    console.log("--------- ", control, " ---------");
    if (control % 4 == 0 && control % 10 == 0) {
      console.log("FizzBuzz");
    }
    if (control % 4 == 0) {
      console.log("Fizz");
    } else if (control % 10 == 0) {
      console.log("Buzz");
    } else {
      console.log(control);
    }
  }
}

fizzbuzz();
