let player1score = 0;
let player2score = 0;
let player1scoretext = document.querySelector(".p1");
let player2scoretext = document.querySelector(".p2");
const playinglimit = document.querySelector("#inputGroupSelect01");
let limit = playinglimit.value;
//buttons
let score1 = document.querySelector("#btn1");
let score2 = document.querySelector("#btn2");
const reset = document.querySelector("#btn3");


//resetting
reset.addEventListener("click",function(e){
    score1.disabled=false;
    score2.diabled=false;
    player1score = 0;
    player2score = 0;
    player1scoretext.classList.remove('text-success', 'text-danger');
    player2scoretext.classList.remove('text-success', 'text-danger');
    displayScore();
})
//playinglimit
playinglimit.addEventListener("change", function (e) {
    limit = playinglimit.value;
})

//changing font color
const changeColor = (winner, loser) => {
    score1.disabled=true;
    score2.diabled=true;
    winner.classList.add('text-success');
    loser.classList.add('text-danger');
}

//displaying final score
const displayFinalScore = () => {
    if (player1score > player2score) {
        changeColor(player1scoretext, player2scoretext);
    }
    else {
        changeColor(player2scoretext, player1scoretext);
    }
}

//setting score display
const displayScore = () => {
    if (player1score == limit || player2score == limit) {
        displayFinalScore();
    }
    player1scoretext.innerHTML = player1score;
    player2scoretext.innerHTML = player2score;
}

displayScore();

//player1score
score1.addEventListener("click", function (e) {
    player1score = changeScore(player1score);
    displayScore();
})

//player2score
score2.addEventListener("click", function (e) {
    player2score = changeScore(player2score);
    displayScore();
})

const changeScore = (score) => {
    if (score < limit) {
        score++;
    }
    return score;
}

