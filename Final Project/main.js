const AlphabetToMorseMap = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
  " ": "/",
  1: ".----",
  2: "..---",
  3: "...--",
  4: "....-",
  5: ".....",
  6: "-....",
  7: "--...",
  8: "---..",
  9: "----.",
  0: "-----",
  ",": "--..--",
};

// {a:, 1, b :2}
const MCtoAlphabetMap = Object.fromEntries(
  Object.entries(AlphabetToMorseMap).map((a) => [a[1], a[0]])
);

const mainTextArea = document.getElementById("text-inputer");
const answerTextArea = document.getElementById("answer-holder");
const MCDotSound = document.getElementById("sound1");
const MCDashSound = document.getElementById("sound2");
const MCBlankSound = document.getElementById("sound3");

const isMorse = (txt) => /[\.\-]/.test(txt[0]);

const translateToMorse = (txt) => {
  const morseIgnorer = /[.-]/g;

  let message = "";
  const splitText = txt.split("");
  splitText.map((ch) => {
    ch = ch.replace(morseIgnorer, "#");
    ch = ch.toUpperCase();
    message += (AlphabetToMorseMap[ch] || ch) + " ";
    console.log("it works");
  });
  answerText = message;
  const manySplitArrays = message.split(" ");
  return manySplitArrays
    .map((ch) => {
      return `<span class="word">${ch}</span>`;
    })
    .join("<span class='space'>&nbsp;</span>");
};

let isStopped = false;
let characterIndex = 0;

const removeActive = () => {
  const activeElement = document.querySelector("#wrapper span.active");
  activeElement && activeElement.setAttribute("class", "word");
};

function playSound(index = 0) {
  if (index === 0) {
    isStopped = false;
    characterIndex = 0;
  }
  const splitText = mainTextArea.value.split("");
  const answerSplitText = answerText.split("/");
  if (!isMorse(mainTextArea.value)) {
    const splitText2 = answerText.split("");
    removeActive();
    if (index === splitText2.length || isStopped) {
      return;
    }
    console.log("the play works");
    const ch = splitText2[index];
    if (ch === ".") {
      MCDotSound.play();
    } else if (ch === "-") {
      MCDashSound.play();
    } else if (ch === " ") {
      MCBlankSound.play();
      removeActive();
      characterIndex += 1;
    }

    document
      .querySelectorAll("#wrapper span.word")
      [characterIndex].setAttribute("class", "word active");
    setTimeout(() => {
      playSound(index + 1);
    }, 400);
  }
}
function pauseSound() {
  MCDotSound.pause();
  MCDashSound.pause();
  MCBlankSound.pause();
  isStopped = true;
}

const translateToText = (txt) => {
  let message = "";
  const splitText = txt.split(" ");
  splitText.map((ch) => {
    message += MCtoAlphabetMap[ch] !== undefined ? MCtoAlphabetMap[ch] : ch;
    console.log("cool");
  });
  return message;
};

let answerText = "";

const translate = (event) => {
  const testSymbols = /[!@#$%^&*()~+=`{}><,\r\n]/g;
  const filteredText = event.currentTarget.value.replace(testSymbols, "");
  answerTextArea.innerHTML = "";

  const text = filteredText.replace(/^\s+|\s+$/g, "");
  answerTextArea.innerHTML = isMorse(text)
    ? translateToText(text)
    : translateToMorse(text);
};

mainTextArea.addEventListener("input", translate);

const questions = [
  [
    ".. - ... / .- / -. .. -.-. . / -.. .- -.-- / - --- -.. .- -.--",
    "its a nice day today",
  ],
  [
    "-.. --- --- .-. ... / .- .-. . / -. . . -.. . -.. / .. -. / .- .-.. .-.. / .... --- -- . ...",
    "doors are needed in all homes",
  ],
  [
    "-. . ...- . .-. / --. --- -. -. .- / --. .. ...- . / -.-- --- ..- / ..- .--.",
    "never gonna give you up",
  ],
  [
    ".. / .-- .. .-.. .-.. / --. .-. .- -... / -- -.-- / -.-. .- -- . .-. .- / - --- / - .- -.- . / .- / .--. .... --- - ---",
    "i will grab my camera to take a photo",
  ],
  [
    "-.-. .- -. / -.-- --- ..- / .--. .. -.-. -.- / -- . / ..- .--.",
    "can you pick me up",
  ],
  ["-.. .- -. -.-. .. -. --. / .. ... / -.-. --- --- .-..", "dancing is cool"],
  [
    ".. / .- -- / .-- .-. .. - .. -. --. / .- / ... . -. - . -. -.-. .",
    "i am writing a sentence",
  ],
];

let temporaryDigit = Math.floor(Math.random() * 6);

let temporaryQuestion = questions[temporaryDigit];
let morse = temporaryQuestion[0];
let english = temporaryQuestion[1];
console.log(morse);
console.log(english);
const questionHolder = document.getElementById("question-holder");
questionHolder.innerHTML = "Translate: \n" + morse;
let textResult = document.getElementById("text-result");
let inputAnswer = "";
let inputBlock = document.getElementById("game-answer");
function submit() {
  inputAnswer = document.getElementById("game-answer").value.toLowerCase();
  console.log(inputAnswer);
  if (english === inputAnswer) {
    textResult.innerHTML =
      "Correct! Press Change Question to get a new question.";
    inputBlock.style.display = "none";
  } else if (inputAnswer === "") {
    textResult.innerHTML =
      "You have not written anything. Please type the translation of the sentence above.";
  } else {
    textResult.innerHTML =
      "Incorrect. Press Change Question to get a new question or type in a new answer.";
  }
}

function change() {
  inputBlock.style.display = "block";
  temporaryDigit = Math.floor(Math.random() * 6);
  console.log(temporaryDigit);
  temporaryQuestion = questions[temporaryDigit];
  morse = temporaryQuestion[0];
  english = temporaryQuestion[1];
  console.log(morse);
  console.log(english);
  questionHolder.innerHTML = "Translate: \n" + morse;
  textResult.innerHTML = " ";
}

function answer() {
  inputBlock.style.display = "none";
  textResult.innerHTML =
    "The answer was '" +
    english +
    "'. Press Change Question for a new question.";
}
