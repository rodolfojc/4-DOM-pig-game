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

var lastNumber;

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
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;
        
        // 2.- DISPLAY THE RESULT
        document.getElementById('dice-1').style.display = 'block';
        document.getElementById('dice-2').style.display = 'block';
        document.getElementById('dice-1').src = 'dice-'+dice1+'.png';
        document.getElementById('dice-2').src = 'dice-'+dice2+'.png';
                
        // 3.- UPDATE THE ROUND SCORE IS THE ROLLED NUMBER IS NOT ONE
        /*
        if (dice === 6 && lastNumber === 6) {
            scores[activePlayer] = 0;
            document.querySelector('#score-'+activePlayer).textContent = '0';
        }
        
        else if (dice !== 1 ){
            // ADD SCORE
            roundScore += dice;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            //NEXT PLAYER
            nextPlayer();
        }
        
        lastNumber = dice;
        */
        
        if (dice1 !== 1 && dice2 !==1){
            // ADD SCORE
            roundScore += dice1 + dice2;
            document.querySelector('#current-'+activePlayer).textContent = roundScore;
        } else {
            //NEXT PLAYER
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
        
        var input = document.querySelector('.final-score').value;
        
        // UNDEFINED, 0, NULL OR "" ARE COERCED TO FALSE
        var winningScore;
        
        if (input) {            
            winningScore = input;
        } else {
            winningScore = 100;
        }
            
            
        // 3.- CHECK IF PLAYER WON THE GAME
        if (scores[activePlayer] >= winningScore){
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.getElementById('dice-1').style.display = 'none';
            document.getElementById('dice-2').style.display = 'none';
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
        
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    
    scores = [0,0];
    activePlayer = 0; //(0) PLAYER 1, (1) PLAYER 2
    roundScore = 0;
    gamePlaying = true;
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

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

