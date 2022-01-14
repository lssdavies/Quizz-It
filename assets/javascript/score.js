var play = document.getElementById('playBtn');
var clear = document.getElementById('clearBtn');

//This function loads the scores onto the scores page
var loadScores =function()  {

}

//takes player back to index scren to play again
var playAgain = function()  {
    window.location.href = "index.html";
}

//clear high scores on click of button
var clearScore = function() {
    localStorage.clear();
}
play.addEventListener('click', playAgain);
clear.addEventListener('click', clearScore);
// loadScores();