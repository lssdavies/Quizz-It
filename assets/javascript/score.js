var play = document.getElementById('playBtn');
var clear = document.getElementById('clearBtn');
var scoreSheet = document.getElementById('scoreSheet');

//This function loads the scores onto the scores page, if there are no scores mainList is an emptu array
var loadScores = function()  {
    var mainList = JSON.parse(localStorage.getItem("mainList")) || [];
    /*sorting the scores from highest to lowest using sort method. The function is passed 2 parameters and we assign the score to each parameter an perform a math operator to sort in decending order highest to lowest score*/
    mainList.sort(function(a,b) {
        return b.score - a.score;
    });
    
    mainList.forEach(function(playerScores)  {
        var listEl = document.createElement('li');
        listEl.className = 'scoreList';
        listEl.textContent = playerScores.initials + ' - ' + playerScores.score;
        //appends li items to ol tag on scores.html to create the scoresheet
        scoreSheet.appendChild(listEl);
    });
}

//takes player back to index scren to play again
var playAgain = function()  {
    window.location.href = "index.html";
}

//clear high scores on click of button
var clearScore = function() {
    localStorage.clear();
    window.location.reload();
}
play.addEventListener('click', playAgain);
clear.addEventListener('click', clearScore);
loadScores();
