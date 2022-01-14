var play = document.getElementById('playBtn');
var clear = document.getElementById('clearBtn');

//takes player back to index scren to play again
function playAgain ()  {
    window.location.href = "index.html";
}

//clear high scores on click of button
function clearScore() {
    localStorage.clear();
}
play.addEventListener('click', playAgain);
clear.addEventListener('click', clearScore)