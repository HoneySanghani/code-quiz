var submitScore = document.createElement("button");
var welcomeEl = document.querySelector("#start-quiz");
submitScore.textContent = "Submit";
/*to display main page of the quiz */
displayMainScreen();

function displayMainScreen() {
  let headingEl = document.createElement("h1");
  headingEl.textContent = "Start The Quiz";

  let descriptionScreen = document.createElement("p");
  descriptionScreen.textContent = `Try to answer the following code-releated questions within the time limit.Keep in mind that incorrect answers will penalize your score/time by 10 seconds!`;

  let startBtn = document.createElement("button");
  startBtn.innerHTML = "Start Quiz";
  startBtn.type = "button";
  startBtn.name = "startBtn";
  startBtn.style.textAlign = "center";
  

  welcomeEl.appendChild(headingEl);
  welcomeEl.appendChild(descriptionScreen);
  welcomeEl.appendChild(startBtn);
}
// Question Answers declared
const questionsObj = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: { 1: "alerts", 2: "booleans", 3: "numbers", 4: "strings" },
      answer: "1",
    },
    {
      question: "The condition in an if / else statement in enclosed with _____.",
      choices: {
        1: "quotes",
        2: "curly brackets",
        3: "parentheses",
        4: "square brackets",
      },
      answer: "3",
    },
    {
      question: "Arrays is Javascript can be used to store _____.",
      choices: {
        1: "numbers and strings",
        2: "other arrays",
        3: "booleans",
        4: "all of the above",
      },
      answer: "4",
    },
    {
      question:
        "String variables must be enclosed within _____ when being assigned to variables.",
      choices: {
        1: "commas",
        2: "quotes",
        3: "curly brackets",
        4: "parentheses",
      },
      answer: "2",
    },
  ];