let Cat = {
  name: "Whiskers",
  hunger: 0.9,
  happiness: 0.1,
  tiredness: 0.9,
  anger: 0.9,
  loneliness: 0.06,
  hungerEmotion: function () {
    if (this.hunger < 0.5) {
      return "not hungry";
    } else if (this.hunger > 0.5 && this.hunger < 0.8) {
      return "hungry";
    } else {
      return "very hungry";
    }
  },
  happinessEmotion: function () {
    if (this.happiness < 0.5) {
      return "not happy";
    } else if (this.happiness > 0.5 && this.happiness < 0.8) {
      return "happy";
    } else {
      return "very happy";
    }
  },
  tirednessEmotion: function () {
    if (this.tiredness < 0.5) {
      return "not tired";
    } else if (this.tiredness > 0.5 && this.tiredness < 0.8) {
      return "tired";
    } else {
      return "very tired";
    }
  },
  angerEmotion: function () {
    if (this.anger < 0.5) {
      return "not angry";
    } else if (this.anger > 0.5 && this.anger < 0.8) {
      return "angry";
    } else {
      return "very angry";
    }
  },
  lonelinessEmotion: function () {
    if (this.loneliness < 0.5) {
      return "not lonely";
    } else if (this.loneliness > 0.5 && this.loneliness < 0.8) {
      return "lonely";
    } else {
      return "very lonely";
    }
  },
  feed: function () {
    if (this.hunger === 0) {
      this.happiness += 0.1;
      console.log("this works");
    } else {
      this.hunger -= 0.1;
      console.log("this works");
    }
  },
  sleep: function () {
    if (this.tiredness === 0) {
      this.happiness += 0.1;
    } else {
      this.tiredness -= 0.1;
    }
  },
  pet: function () {
    this.happiness += 0.2;
  },
};

function print(obj, emotion) {
  console.log(`${obj.name} is '${emotion}'`);
}

print(Cat, Cat.hungerEmotion());
console.log(Cat.hunger);
print(Cat, Cat.happinessEmotion());
console.log(Cat.happiness);
print(Cat, Cat.tirednessEmotion());
console.log(Cat.tiredness);
print(Cat, Cat.angerEmotion());
console.log(Cat.anger);
print(Cat, Cat.lonelinessEmotion());
console.log(Cat.loneliness);

// add listeners
document.getElementById("actions").addEventListener("change", (e) => {
  document.getElementById("status").innerText = Cat[
    e.currentTarget.value + "Emotion"
  ]();
});

document.getElementById("feed-button").addEventListener("click", () => {
  Cat.feed();
  document.getElementById("status").innerText = Cat.hungerEmotion();
});

document.getElementById("sleep-button").addEventListener("click", () => {
  Cat.sleep();
  document.getElementById("status").innerText = Cat.tirednessEmotion();
});

document.getElementById("pet-button").addEventListener("click", () => {
  Cat.pet();
  document.getElementById("status").innerText = Cat.happinessEmotion();
});
