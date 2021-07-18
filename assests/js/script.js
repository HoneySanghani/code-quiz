var submitScore = document.createElement("button");
var welcomeEl = document.querySelector("#start-quiz");
submitScore.textContent = "Submit";
displayMainScreen();

function displayMainScreen() {
  let headingEl = document.createElement("h1");
  headingEl.textContent = "Start The Quiz";

  let descriptionScreen = document.createElement("p");
  descriptionScreen.textContent = `Try to answer the following code-releated questions within the time limit.Keep in mind that incorrect answers will penalize your score/tine by 10 seconds!`;

  let startBtn = document.createElement("button");
  startBtn.innerHTML = "Start Quiz";
  startBtn.type = "button";
  startBtn.name = "startBtn";
  startBtn.style.textAlign = "center";
  

  welcomeEl.appendChild(headingEl);
  welcomeEl.appendChild(descriptionScreen);
  welcomeEl.appendChild(startBtn);
}