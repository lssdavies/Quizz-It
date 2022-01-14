var play = document.getElementById('playBtn');
var clear = document.getElementById('clearBtn');
var scoreSheet = document.getElementById('scoreSheet');

//This function loads the scores onto the scores page, if there are no scores mainList is an emptu array
var loadScores = function()  {
    var mainList = JSON.parse(localStorage.getItem("mainList")) || [];
    
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


 //for loop to generate li items for scores stored in local storage
    // for (var i = 0; i < mainList.length; i++)   {
    //     var listEl = document.createElement('li');
    //     console.log()
    //     listEl.className = '';
    //     console.log(mainList.length);
    //     console.log(mainList);
    //     console.log(mainList[1]);
    //     listEl.textContent = mainList['initials'] + ' - ';
    //}