var questions = document.querySelector(".box"); 
var container = document.querySelector(".container")
var startButton = document.querySelector(".start-button")
var timeEl = document.querySelector(".time");

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





function startGame() {
    setTimer();
    displayQuestions();
}












// Make a timer for the quiz 
// Make answers to the quiz 
// Make a highscore page 
// Make buttons for the user to put in their inisials 
// Make a button for the game to start