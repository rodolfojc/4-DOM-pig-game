/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();

//DOM SETTER
//document.querySelector('#current-'+activePlayer).textContent = dice;

//document.querySelector('#current-'+activePlayer).innerHTML = '<em>'+ dice +'</em>';

//DOM GETTER
var x = document.querySelector('#score-0').textContent;
console.log(x);

//OTHER WAY

//function btn(){
//    
//}

//document.querySelector('.btn-roll').addEventListener('click', btn);

//ANONYMOUS FUCTION - NO NAME , CANNOT BE REUSED
document.querySelector('.btn-roll').addEventListener('click', function(){
    
    if(gamePlaying) {
        
        // 1.- RANDOM NUMBER
        var dice = Math.floor(Math.random()*6)+1;

        // 2.- DISPLAY THE RESULT
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-'+dice+'.png';

        // 3.- UPDATE THE ROUND SCORE IS THE ROLLED NUMBER IS NOT ONE
        if (dice !== 1){
            // ADD SCORE
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        }else {
            // NEXT PLAYER
            nextPlayer();
        }
              
    }
    
    
    
    
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    
    if (gamePlaying) {
        
        // 1.- ADD CURRENT SCORE TO GLOBAL SCORE
        scores[activePlayer] += roundScore;
    
        // 2.- UPDATE UI
        document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];

        // 3.- CHECK IF PLAYER WON THE GAME
        if (scores[activePlayer] >= 100){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            // 4.- NEXT PLAYER
            nextPlayer();
        }
        
    }
        
})

function nextPlayer(){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
        
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        
        // REMOVE OR ADD CLASS
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
        document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    
    score = [0,0];
    activePlayer = 0; //(0) PLAYER 1, (1) PLAYER 2
    roundScore = 0;
    gamePlaying = true;
    
    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    

}

