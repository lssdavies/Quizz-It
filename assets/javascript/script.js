//Global Variables

//stores the time and set time limit
var time = 60;
//initialized at zero and will be used to track the score
var score = 0;

//variables used to get html elements by id and store them
var startButton = document.getElementById('startBtn');
var startMessage = document.getElementById("rules");
var questionBoard = document.getElementById("questions");
var questionText = document.getElementById("question");
var answerText1 = document.getElementById("option1");
var answerText2 = document.getElementById("option2");
var answerText3 = document.getElementById("option3");
var answerText4 = document.getElementById("option4");
var buttonSelected = document.getElementsByClassName("answers");

//array of 10 Objects to store questions for quiz
var quizQuestions= [
    {
        question: "Commonly used data types in JavaScript DO NOT include:",
        option1: "Boolean",
        option2: "Strings",
        option3: "Numbers",
        option4: "Alerts",
        answer: "Alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ",
        option1: "Quotes",
        option2: "Curly Brackets {}",
        option3: "Parentheses ()",
        option4: "Square Brackets []",
        answer: "Parentheses ()"
    },
    {
        question: "Arrays in JavaScript can be used to store ",
        option1: "Numbers and strings",
        option2: "Other arrays",
        option3: "Booleans",
        option4: "Answer all of the above",
        answer: "Answer all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        option1: "Commas",
        option2: "Parentheses",
        option3: "Quotes",
        option4: "Asterisks",
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option1: "JavaScript",
        option2: "Web API's",
        option3: "for loops",
        option4: "console.log()",
        answer: "console.log()"
    },
    {
        question: "Commonly used data types in JavaScript DO NOT include:",
        option1: "Boolean",
        option2: "Strings",
        option3: "Numbers",
        option4: "Alerts",
        answer: "Alerts"
    },
    {
        question: "Which of these is NOT a valid way to declare a variable?",
        option1: "var name = 'Fred'",
        option2: "const color = 'Red'",
        option3: "let i = 0",
        option4: "variable x = 'y'",
        answer: "variable x = 'y'"
    },
    {
        question: "Which of the following is writtent in Camel Case?",
        option1: "OneTwoThree",
        option2: "racecaR",
        option3: "HYPERTEXT",
        option4: "animalNames",
        answer: "animalNames"
    },
    {
        question: "How do you wirte the condition for loop?",
        option1: "for var i=0, i < 5, i++",
        option2: "for var i=0; i < 5; i++",
        option3: "for (var i=0; i < 5; i++)",
        option4: "None of the above are for loops",
        answer: "Alerts"
    },
    {
        question: "How do you link an external Javascript file to a webpage?",
        option1: "<script>script.js</script>",
        option2: "<script href='script.js'/>",
        option3: "<script src='script.js></script>",
        option4: "<link src='script.js'></link>",
        answer: "<script src='script.js></script>"
    }
]

//Function to count down from 60 seconds
var countdown = function() {
    if (time > 0)   {
        time -=1;
        document.getElementById("clock").innerHTML = time;
    }
    else {
        clearInterval(startQuiz);
    }
}
//this function will check the users answer and either decrement time for incorrect answer or add to score
var checkAnswer = function()    {

}

// this function will cycle through the array of questions and load a questions on the page as long as there is time or another question available
var displayQuestions = function ()  {
    questionText.innerHTML = quizQuestions[0].question;
    answerText1.innerHTML = quizQuestions[0].option1;
    answerText2.innerHTML = quizQuestions[0].option2;
    answerText3.innerHTML = quizQuestions[0].option3;
    answerText4.innerHTML = quizQuestions[0].option4;
}


var  startQuiz= function()  {
    //The set interval runs countown every 1000 ms ie every second
    setInterval(countdown, 1000);
    //This hides the start message and start button by changing the css class name to hiddden.
    startMessage.className = "hidden";
    startButton.className = "hidden";
    //This changes the class of the hidden divs to display the questions.
    questionBoard.className = "makeVisible";
    questionText.className = "questionHeading";
    displayQuestions();
    }
        
//This links the start    
startButton.addEventListener('click', startQuiz);