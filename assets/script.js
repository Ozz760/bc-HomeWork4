var questions = document.querySelector(".box"); 
var container = document.querySelector(".container")
var startButton = document.querySelector(".start-button")
var timeEl = document.querySelector(".time");
var questionEl = document.querySelectorAll(".questions")

var secondsLeft = 75; 

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

function startTimer() {
    timer = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
      if (timerCount >= 0) {
      } else (timerCount === 0) 
      }
    , 1000);
  }
  
