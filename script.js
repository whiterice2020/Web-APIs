// Variables
var questions = [
{
    title: "How do you create a variable :",
    choices: ["function", "array", "var", "none of the above"],
    answer: "var"
},
{
    title: "What is the beginning index number of an array:",
    choices: ["1", "0", "2", "3"],
    answer: "0"
},
{
    title: "Who invented JavaScript? :",
    choices: ["Albert Einstien", "Bob Marley", "Douglas Crockford", "Brendan Eich"],
    answer: "Brendan Eich"
},
{
    title: "Can a function not contain a parameter:",
    choices: ["Yes", "No"],
    answer: "Yes"
},
{
    title: "What is the name of this function - function divide (Param1, Param2){}:",
    choices: ["Function", "Param1", "Param2", "Divide"],
    answer: "Divide"
},
{
    title: "Where is the correct place to insert a Javascript:",
    choices: ["<HTML>", "<Header>", "<BODY>", "<Footer>"],
    answer: "<BODY>"
},
]

var containerEl = document.querySelector(".container");

var timerDisplay = document.querySelector(".timer");
var startText = document.createElement("h1");
var startBtn = document.createElement("button");
var questionText = document.createElement("p");
// Variables for Highscores page
// var scoresH1El = document.createElement(".done");
// var initialsBoxEl = document.createElement(".initialsDiv");
// // var finalScoreEl = document.createElement(".");
var resultsDiv = document.querySelector("results");
var score = 0;
var timer = 30;
var index = 0;


function openingPage() {
    startText.textContent = "Welcome to the Quiz";
    startBtn.textContent = "Start Quiz";
    containerEl.appendChild(startText);
    containerEl.appendChild(startBtn);
}

 

//Timer Functions with redirect to highscores page
function showTimer() {
    timerDisplay.textContent = timer

    var timeInterval = setInterval(function () {
        timer--;
        timerDisplay.textContent = timer
        if (timer === 0) {
            clearInterval(timeInterval)
            window.location.href = "./highScores.html";
            
        }


    }, 1000);


}

function nextQuestion() {
    
    var currentQuestion = questions[index];

    containerEl.textContent = "";

questionText.textContent = currentQuestion.title;
containerEl.appendChild(questionText);

var answersDiv = document.createElement("div");

// Create answer buttons
for (let i= 0; i < currentQuestion.choices.length; i++){
    var answerBtn = document.createElement("button");
    answerBtn.classList.add("choiceBtn");
    answerBtn.textContent = currentQuestion.choices[i];
    answersDiv.appendChild(answerBtn);

}

    containerEl.appendChild(answersDiv);
}
// Start quiz Function
function startQuiz() {
    
    showTimer()

    nextQuestion()
}

function checkAnswer(event){
    if(event.target.matches(".choiceBtn"))
    score ++;
    index++;
    // resultsDiv.textContent="abdsdalkfja";
    // containerEl.appendChild(resultsDiv);
    // Add the bottom part of correct or wrong
    // another if statement
    // maybe a span to display right or wrong
    nextQuestion();

}

startBtn.addEventListener("click", function (event) {
    
})

startBtn.addEventListener("click", startQuiz);
document.addEventListener("click", checkAnswer);

openingPage()
