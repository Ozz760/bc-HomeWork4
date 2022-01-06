var questions = document.querySelector(".box"); 
var container = document.querySelector(".container")
var startButton = document.querySelector(".start-button")
var timeEl = document.querySelector(".time");
var questionEl = document.querySelectorAll(".questions")
var qDisplay = document.querySelector(".q-display")

var question = [
    {
        question : "What does HTML stand for?", 
        choices : ["Hypertext Markup Language", "Hello, Tom Mark Larry", "How is That Monkey so Large?", "None of the above"],
        answer: "Hypertext Markup Language", 
    },
    {
        question : "Which programming language is used by most websites today", 
        choices : ["PHP", "Java", "JavaScript", "C"], 
        answer : "JavaScript"
    }
];

var secondsLeft = 75; 

function startGame() { 
    startTimer()
    renderQuestion()
}

function startTimer() {
    timer = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;
        if (timerCount >= 0) {
        } else (timerCount === 0) 
    }, 1000);
}

function renderQuestion() { 
    var h4 = document.createElement("h4"); 
    h4.textContent = question[0].question; 

    qDisplay.append(h4); 
}

startButton.addEventListener('click', startGame); 