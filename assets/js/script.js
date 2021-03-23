//array of question objects.
var questions = [
    //question 1
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        andswerD: ""
    },
    //question 2
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        andswerD: ""
    },
    //question 3
    {
         question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        andswerD: ""
    },
    //question 4
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        andswerD: ""
    },
    //question 5
    {
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        andswerD: ""
    }
];


var timeE1 = document.getElementById('timer');
var mainElement = document.getElementById('main-card');
var secondsLeft = 60;
var startButton = document.createElement('button');
startButton.setAttribute('class', 'start-button');
startButton.textContent = "START";
mainElement.appendChild(startButton);

// starts the timer when called
function updateSeconds(){
    var timer = setInterval(function(){
        secondsLeft--;
        timeE1.textContent = secondsLeft;
        if(secondsLeft === 0){
            clearInterval(timer);
        }
    }, 1000);
};


updateSeconds();




//function for running the quiz

//function to check if answer is correct or incorrect.

//function for randomly selecting the question and answer order.

//function for count down timer

//button click events. for start button high score button and question buttons.






































