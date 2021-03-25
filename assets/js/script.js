//array of question objects.
var questions = [
    //question 1
    {
        question: "Which of the following is a valid variable name?",
        A: "!variable",
        B: "8digits",
        C: "_myVar",
        D: "123",
        answer: "C"
    },
    //question 2
    {
        question: "What symbol is used to assign a statement to a variable?",
        A: "+",
        B: ">",
        C: "#",
        D: "=",
        answer: "D"
    },
    //question 3
    {
         question: "Which of these is not a primitave data type?",
         A: "var",
         B: "number",
         C: "boolean",
         D: "undefined",
         answer: "A"
    },
    //question 4
    {
        question: "Which of the following is the correct syntax for the the while loop?",
        A: "while (statement) condition;",
        B: "while (condition) statement;",
        C: "while (initial expression | condition | increment) statement;",
        D: "while (condition) {statement}else{statement};",
        answer: "B"
    },
    //question 5
    {
        question: "How many primitive types does javascript have?",
        A: "5",
        B: "11",
        C: "7",
        D: "Too many!",
        answer: "C"
    }
];

var timeE1 = document.getElementById('timer');
var mainElement = document.getElementById('main-card');

var secondsLeft = 60;
var startCountDown = 4;

var startButton = document.createElement('button');

startButton.setAttribute('class', 'start-button');

startButton.textContent = "START";

mainElement.appendChild(startButton);

// starts the  when called
function gameTimer(){
    var timer = setInterval(function(){
        secondsLeft--;
        timeE1.textContent = secondsLeft;
        if(secondsLeft === 0){
            timeE1.textContent = "";
            clearInterval(timer);
        }
    }, 1000);
};

var startCountDown = 4;
//start count down.
function gameStartCounter(){
    var timer = setInterval(function(){
        startCountDown--;
        mainElement.textContent = startCountDown;
        if(startCountDown === 0){
            mainElement.textContent = "";
            clearInterval(timer);
            gameTimer();
            startGame();
        }
    }, 1000);
};

//start game function
function startGame(){
    
    
    console.log("started")


}


//end game function
function endGame(){



}

//when the start button is pressed remove the start button and start the game.
startButton.addEventListener("click", function(event){
    event.preventDefault();
    startButton.setAttribute("style", "display: none;");
    gameStartCounter();
});






//function for running the quiz

//function to check if answer is correct or incorrect.

//function for randomly selecting the question and answer order.

//function for count down timer

//button click events. for start button high score button and question buttons.






































