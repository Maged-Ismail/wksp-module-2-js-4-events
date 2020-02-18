        //Variables Declaration
const body = document.querySelector('body');
const main = document.getElementById('main');
const menuBtn = document.getElementById('menu');
const startBtn = document.getElementById('start');
const instructionsBtn = document.getElementById('instructions');
const instructMenu = document.getElementById('instrucMenu');
const gamePage = document.getElementById('gamePage');

let p1Point = 0;
let p2Point = 0;
let winner = 0;
let s;
let round;

                //Instructions Elements
const instruct = document.createElement('p');
instruct.innerText = 'Two players wait for a signal to start after a random delay. Once the start signal, first person to press their key wins. \nIf a player presses before the signal appears, they lose. Player one presses the q key and player 2 presses the p key.';
instruct.className = 'square';
instrucMenu.appendChild(instruct);


const backBtn = document.createElement('button');
backBtn.innerText = '<--Back to Menu';
backBtn.className = 'square';
instrucMenu.appendChild(backBtn);
backBtn.style.fontSize ='1.1rem';

                //Game Elements

const p1 = document.createElement('img');
p1.src = 'imgs/p1.gif';
gamePage.appendChild(p1);
p1.id = 'p1';
p1.style.maxHeight = '100px';
p1.style.position = 'absolute';
p1.style.bottom = '90px';
p1.style.left = '150px';

const p1Win = document.createElement('img');
p1Win.src = 'imgs/p1win.gif';
gamePage.appendChild(p1Win);
p1Win.id = 'p1Win';
p1Win.style.maxHeight = '150px';
p1Win.style.position = 'absolute';
p1Win.style.bottom = '100px';
p1Win.style.left = '600px';
p1Win.style.display ='none';

const p1Ring = document.createElement('img');
p1Ring.src = 'imgs/prize.gif';
gamePage.appendChild(p1Ring);
p1Ring.id = 'p1Ring';
p1Ring.style.maxHeight = '50px';
p1Ring.style.position = 'absolute';
p1Ring.style.top = '50px';
p1Ring.style.left = '100px';
p1Ring.style.display = 'none';

const prize = document.createElement('img');
prize.src = 'imgs/prize.gif';
gamePage.appendChild(prize);
prize.id = 'prize';
prize.style.maxHeight = '130px';
prize.style.position = 'absolute';
prize.style.bottom = '100px';
prize.style.left = '600px';
prize.style.display ='none';

const p2 = document.createElement('img');
p2.src = 'imgs/p2.gif';
gamePage.appendChild(p2);
p2.id = 'p2';
p2.style.maxHeight = '150px';
p2.style.position = 'absolute';
p2.style.bottom = '100px';
p2.style.right = '150px';

const p2Win = document.createElement('img');
p2Win.src = 'imgs/p2win.gif';
gamePage.appendChild(p2Win);
p2Win.id = 'p2Win';
p2Win.style.maxHeight = '150px';
p2Win.style.position = 'absolute';
p2Win.style.bottom = '100px';
p2Win.style.left = '600px';
p2Win.style.display ='none';

const p2Ring = document.createElement('img');
p2Ring.src = 'imgs/prize.gif';
gamePage.appendChild(p2Ring);
p2Ring.id = 'p2Ring';
p2Ring.style.maxHeight = '50px';
p2Ring.style.position = 'absolute';
p2Ring.style.top = '50px';
p2Ring.style.right = '100px';
p2Ring.style.display = 'none';

const signal = document.createElement('img');
signal.src = 'imgs/signal.png';
gamePage.appendChild(signal);
signal.style.maxHeight = '150px';
signal.style.position = 'absolute';
signal.style.display ='none';



        //Main Page

instructMenu.style.display = 'none';
gamePage.style.display = 'none';

startBtn.addEventListener('click', firstRound);
instructionsBtn.addEventListener('click', instructions);

        //Audio
const gameMusic = new Audio('./sounds/bg.mp3');
gamePage.appendChild(gameMusic);

const pauseMusic = new Audio('./sounds/signal.mp3');
gamePage.appendChild(pauseMusic);

const prizeMusic = new Audio('./sounds/prize.mp3');
gamePage.appendChild(prizeMusic);

const loseMusic = new Audio('./sounds/lose.mp3');
gamePage.appendChild(loseMusic);

        //Instruction & backToMenu functions

function instructions(){
    startBtn.removeEventListener('click', firstRound);
    instructionsBtn.removeEventListener('click', instructions);
    menu.style.display='none';
    instructMenu.style.display = 'block';
    backBtn.addEventListener('click', backToMenu);
}

function backToMenu(){
    backBtn.removeEventListener('click', backToMenu);
    menu.style.display='block';
    instructMenu.style.display = 'none';
    startBtn.addEventListener('click',firstRound);
    instructionsBtn.addEventListener('click', instructions);
}

        //Game function

function firstRound(){
    gameMusic.currentTime=0;
    p1Point=0;
    p2Point=0;
    round =0;
    startBtn.removeEventListener('click', firstRound);
    instructionsBtn.removeEventListener('click', instructions);
    menu.style.display='none';
    gamePage.style.display = 'block';
    game();
}

function game(){  

    gameMusic.currentTime =0;
    signal.style.display = 'none';
    prize.style.display = 'none';
    p1.style.display='block';
    p1Win.style.display = 'none';
    p2.style.display='block';
    p2Win.style.display = 'none';

    if (p1Point === 3){
        alert('Player 1 Wins!');
        console.log('P1 Wins');
        p1Ring.style.display = 'none';
        p2Ring.style.display = 'none';
        setTimeout(firstRound(), 3000);
    }
    else if (p2Point === 3){
        alert('Player 2 Wins!');
        console.log('P2 Wins');
        p1Ring.style.display = 'none';
        p2Ring.style.display = 'none';
        setTimeout(firstRound(), 3000);
    } 
    else if (p1Point<4 && p2Point<4){
        gameMusic.play();
        startRound();
    }
    }

function startRound(){
    body.addEventListener('keydown', pLose);
    s = setTimeout(function(){
            body.removeEventListener('keydown', pLose);
            body.addEventListener('keydown', pWins);
            gameMusic.pause();
            pauseMusic.play();
            signal.style.top = `${Math.round(Math.random()*300)}px`;
            signal.style.right = `${Math.round(Math.random()*100)}px`;
            signal.style.transform= `rotate(${Math.random() * 360}deg)`;
            signal.style.display ='block';
            prize.style.display = 'block';
    }, Math.round(Math.random()*3000)+2000);
}

function pWins(){
    if (event.key === 'q'){
        prizeMusic.play();
        prize.style.display = 'none';
        p1.style.display='none';
        p1Win.style.display = 'block';
        p1Ring.style.display = 'block';
        p1Point ++;
    }
    
    if (event.key === 'p'){
        prizeMusic.play();
        prize.style.display = 'none';
        p2.style.display='none';
        p2Win.style.display = 'block';
        p2Ring.style.display = 'block';
        p2Point ++;
    }

    body.removeEventListener('keydown', pWins);
    round ++;
    setTimeout(game(), 5000);
}

function pLose(){
    clearTimeout(s);
    if (event.key === 'p'){
        loseMusic.play();
        prize.style.display = 'none';
        p1.style.display='none';
        p1Win.style.display = 'block';
        p1Ring.style.display = 'block';
        p1Point ++;
    }
    
    if (event.key === 'q'){
        loseMusic.play();
        prize.style.display = 'none';
        p2.style.display='none';
        p2Win.style.display = 'block';
        p2Ring.style.display = 'block';
        p2Point ++;
    }

    body.removeEventListener('keydown', pLose);
    round ++;
    setTimeout(game(), 5000);
}












// function resetRound(){
//     console.log('before',p1);
//     // p1.removeAttribute('src');
//     p1.src='imgs/p1.gif';
//     console.log('after',p1);
//     // loseMusic.pause();
//     gameMusic.currentTime =0;
//     signal.style.display = 'none';
//     prize.style.display = 'none';
//     // p1.style.display='block';
//     // p1Win.style.display = 'none';

//     p2.style.display='block';
//     p2Win.style.display = 'none';
//     game();
// }