const PASSWORD = "secret";
function passwordGuesser() {
  let guess = prompt("Enter Passcode");
  while (guess != PASSWORD) {
    console.log("That wasn't correct");
    guess = prompt("Sorry, that wasn't correct. Try again.");
  }
  console.log("You got it right!");
  alert("You got it right!");
}
