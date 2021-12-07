//Global Variables

//stores the time and set time limit
var time = 60;
//initialized at zero and will be used to track the score
var score = 0;
//stores user button id to check answer
var userAnswer = "";
//stores index value to loop through quizQuestion
var questionIndex = 0;

//variables used to get html elements by id and store them
var startButton = document.getElementById('startBtn');
var startMessage = document.getElementById("rules");
var questionBoard = document.getElementById("questions");
var questionText = document.getElementById("question");
var answerText1 = document.getElementById("option1");
var answerText2 = document.getElementById("option2");
var answerText3 = document.getElementById("option3");
var answerText4 = document.getElementById("option4");
var answerStatus = document.getElementById("answerStatus");
var scoreTotal = document.getElementById("scoreBoard");

//array of 9 Objects to store questions for quiz
var quizQuestions= [
    {
        question: "Commonly used data types in JavaScript DO NOT include:",
        option1: "Boolean",
        option2: "Strings",
        option3: "Numbers",
        option4: "Alerts",
        answer: "option4"
    },
    {
        question: "The condition in an if / else statement is enclosed within ",
        option1: "Parentheses",
        option2: "Curly Brackets",
        option3: "Quotes",
        option4: "Square Brackets",
        answer: "option1"
    },
    {
        question: "Arrays in JavaScript can be used to store ____ .",
        option1: "Numbers and strings",
        option2: "Other arrays",
        option3: "Booleans",
        option4: "Answer all of the above",
        answer: "option4"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        option1: "Commas",
        option2: "Quotes",
        option3: "Parentheses",
        option4: "Asterisks",
        answer: "option2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        option1: "JavaScript",
        option2: "Web API's",
        option3: "console.log( )",
        option4: "for loops",
        answer: "option3"
    },
    {
        question: "Which of these is NOT a valid way to declare a variable?",
        option1: "variable x = y ",
        option2: 'const color = "Red" ;',
        option3: "let i = 0 ;",
        option4: 'var name = "Fred" ;',
        answer: "option1"
    },
    {
        question: "Which of the following is written in Camel Case?",
        option1: "OneTwoThree",
        option2: "racecaR",
        option3: "animalNames",
        option4: "HYPERTEXT",
        answer: "option3"
    },
    {
        question: "How do you wirte the condition for loop?",
        option1: "for var i = 0, i < 5, i++ ;",
        option2: "for (var i = 0; i < 5; i++) ;",
        option3: "for var i = 0; i < 5; i++ ;",
        option4: "None of the above are for loops",
        answer: "option2"
    },
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

var startQuiz= function()  {
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


// this function will load a question on the page based on the current value of questtionIndex
function displayQuestions()  {
    questionText.textContent = quizQuestions[questionIndex].question;
    answerText1.textContent = quizQuestions[questionIndex].option1;
    answerText2.textContent = quizQuestions[questionIndex].option2;
    answerText3.textContent = quizQuestions[questionIndex].option3;
    answerText4.textContent = quizQuestions[questionIndex].option4;
    checkAnswers();
    
}

//this function will get the users answer and store it in the variable userAnswer
var checkAnswers = function()    {
    
    //this functions checks which answer the user selected and checks if the answer is right or wrong
    var answerSelected = function() {
        userAnswer = this.id;
        console.log(userAnswer);
        if (userAnswer === quizQuestions[questionIndex].answer) {
            answerStatus.innerHTML = "Correct! <span class='right'>&#10004</span>";
            setInterval(clearAnswerStatus, 500);
            score += 10;
            scoreTotal.innerHTML = score;
            nextQuestion();
        }
        else{
            answerStatus.innerHTML = "Incorrect! <span class='wrong'>&#10006</span>";
            setInterval(clearAnswerStatus, 500);
            time -= 10;
            if (time <= 0) {
                endQuiz();
            }
            nextQuestion();
        } 
    }
    //this section tracks the button id that was clicked and passes answer to this.id(which is the clicked buttons id)
    document.getElementById("option1").onclick = answerSelected;
    document.getElementById("option2").onclick = answerSelected;
    document.getElementById("option3").onclick = answerSelected;
    document.getElementById("option4").onclick = answerSelected;
    
}
/*This function calls the next question in trhe array, no loop needed since a loop technically exhist because the functions call eachother*/
function nextQuestion() {
    if (time > 0 || questionIndex < quizQuestions.length - 1)   {
        console.log(questionIndex);
        console.log(quizQuestions[questionIndex].answer);
        displayQuestions();
    }
    if (time === 0 ||questionIndex === quizQuestions.length) {
        endQuiz();
    }
}

//this function resets answerStatus to be hidden
function clearAnswerStatus()    {
    answerStatus.innerHTML = "";
}

//this is the endQuiz function that will bring up the score summary screen
function endQuiz()  {
    
}

/*current state of the application: I am able to loop through the array quizquestions but the but get an undefine error at the end. I believe this is happening because as is the program's if statement is incrementing questionIndex++; one more time than it should. One the program is sorted I also need to add the div containers in the index file to store the score summary page.*/