//array of question objects.
var codeQuiz = [
    //question 1
    {
        question: "Which of the following is a valid variable name?",
        1: "!variable",
        2: "8digits",
        3: "_myVar",
        4: "123",
        answer: "3"
    },
    //question 2
    {
        question: "What symbol is used to assign a statement to a variable?",
        1: "+",
        2: ">",
        3: "#",
        4: "=",
        answer: "4"
    },
    //question 3
    {
         question: "Which of these is not a primitave data type?",
         1: "var",
         2: "number",
         3: "boolean",
         4: "undefined",
         answer: "1"
    },
    //question 4
    {
        question: "Which of the following is the correct syntax for the the while loop?",
        1: "while (statement) condition;",
        2: "while (condition) statement;",
        3: "while (initial expression | condition | increment) statement;",
        4: "while (condition) {statement}else{statement};",
        answer: "2"
    },
    //question 5
    {
        question: "How many primitive types does javascript have?",
        1: "5",
        2: "11",
        3: "7",
        4: "Too many!",
        answer: "3"
    }
];

//find the main and aside elements and asign them to variables.
var mainElement = document.getElementById('main-card');
var asideEl = document.getElementById('time-box')

//create the timer h2 element.
var timeE1 = document.createElement('h2');

//create question and answer elements and assign them variables.
var question = document.createElement('h2');
var ans1 = document.createElement('button');
var ans2 = document.createElement('button');
var ans3 = document.createElement('button');
var ans4 = document.createElement('button');

//high score and retry button.
var highScore = document.createElement('button');
var retry = document.createElement('button');

//variable that will store the users answer.
var selectedAns;

//initial seconds left
var secondsLeft = 1;

//creates start button on game open and sets its styles.
var startButton = document.createElement('button');
startButton.setAttribute('class', 'start-button');
startButton.textContent = "Start";
mainElement.appendChild(startButton);

// starts the timer  when called
function gameTimer(){
    var timer = setInterval(function(){
        secondsLeft--;
        timeE1.textContent = secondsLeft;
        if(secondsLeft === 0 || secondsLeft < 0){
            clearInterval(timer);

            // end the game
            endGame();
        }
    }, 1000);
};



//start game function
function startGame(){
    console.log("started")
 
}

//end game function
function endGame(){
    console.log('ended')

    asideEl.removeChild(timeE1);



}

//when the start button is pressed remove the start button and start the game.
startButton.addEventListener("click", function(event){
    event.preventDefault();

    // removes the start button after being pressed
    mainElement.removeChild(startButton)

    // sets the inital text fot he text box to 60
    timeE1.textContent = 60;
    asideEl.appendChild(timeE1);

    //start the game and timer
    gameTimer();
    startGame();
});


// to remove a elemet
// var elem = document.getElementById("myDiv");
// elem.parentNode.removeChild(elem);

//function to check if answer is correct or incorrect.

//button click events. for start button high score button and question buttons.

