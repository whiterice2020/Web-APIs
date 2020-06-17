// Variables
var questions = [
{
    title: "This is Question 4 :",
    choices: ["what is pizza made out of", "Why is the sky blue?", "what year was i born", "what school are you in"],
    answer: "Choice 4"
},
{
    title: "This is Question 2 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 3 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
{
    title: "This is Question 4 answer is 4:",
    choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
    answer: "Choice 4"
},
]

var containerEl = document.querySelector(".container");

var timerDisplay = document.querySelector(".timer");
var startText = document.createElement("h1");
var startBtn = document.createElement("button");
var questionText = document.createElement("p");
// var resultsDiv = document.querySelector("results");
var score = 0;
var timer = 3;
var index = 0;


function openingPage() {
    startText.textContent = "Welcome to the Quiz";
    startBtn.textContent = "Start Quiz";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}


// function startQuiz()(params) {
    
// }

function showTimer() {
    timerDisplay.textContent = timer

    var timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer
        if (timer === 0){
            clearInterval(timeInterval)
            window.location.href = "./highScores.html";
        }


    }, 500);


}

function nextQuestion() {
    
    var currentQuestion = questions[index];

    containerEl.textContent = "";

questionText.textContent = currentQuestion.title;
containerEl.appendChild(questionText);

var answersDiv = document.createElement("div");

for (let i= 0; i < currentQuestion.choices.length; i++){
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("choiceBtn");
    answerBtn.textContent = currentQuestion.choices[i];
    answersDiv.appendChild(answerBtn);

}

    containerEl.appendChild(answersDiv);
}

function startQuiz() {
    
    showTimer()

    nextQuestion()
}

function checkAnswer(event){
    if(event.target.matches(".choiceBtn"))
    // score ++;
    index++;
    nextQuestion();

}

startBtn.addEventListener("click", function (event) {
    
})

startBtn.addEventListener("click", startQuiz);
document.addEventListener("click", checkAnswer);

openingPage()
// WHEN I click the start button
// THEN a timer starts and I am presented with a question



// WHEN I answer a question
// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock








// WHEN all questions are answered or the timer reaches 0
// THEN the game is over


// WHEN the game is over
// THEN I can save my initials and score






// *********************************************************************
// You should set your questions as an object like this example:
// var questions = [
//   {
//     title: "Example Question 1:",
//     choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
//     answer: "answer from choices"
//   },
//   {
//     title: "Example Question 2:",
//     choices: ["Choice 1", "Choice 2", "Choice 3", "Choice 4"],
//     answer: "answer from choices"
//   }
// ];
// ************************************************************************



// ***************************************************************************
// ✓ The first view of the application displays a button used to start the quiz.
// ✓ Clicking the 'Start Quiz' button displays a series of questions.
// ✓ Once the quiz begins, a countdown timer starts.
// ✓ If a question is answered incorrectly, additional time is subtracted from the timer.
// ✓ The timer ends when all questions have been answered or the timer reaches 0.
// ✓ After the game ends, the user can save their initials and score to a highscores view using local storage.
// ✓ Repository contains quality README with description, screenshot, link to deployed application.
// ***************************************************************************

