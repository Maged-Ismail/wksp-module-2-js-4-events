// Exercise 2.3
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH! (This is the last time.)
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click the screen.

// It would be a good idea to create a new function that will manage the whole game.

const body = document.querySelector('body');
const result = document.getElementById('result');
let timer = document.getElementById('timer');
const start = document.createElement('p');
const text = document.querySelector('.time-text');
text.style.display = 'none';
start.innerText = 'Click To Start Game'
body.appendChild(start);
let s;

body.style.fontSize='3rem';
body.style.textAlign='center';
body.style.backgroundColor='lightgrey';


body.addEventListener('click', game);

function fastClick (){
    clearTimeout(s);
    clicked = true;
    result.innerText = 'YOU WIN!!';
    body.removeEventListener('click', fastClick);
}
function game(){
    body.removeEventListener('click', game);
    start.style.display ='none';
    text.style.display = 'block';
    let clicked = false;
    let rand = Math.round(Math.random()*5);
    timer.innerText = rand;

    s = setTimeout(function (){
        if (!clicked){
            result.innerText = "YOU LOSE!!";
            body.removeEventListener('click', fastClick);
    }
}, rand * 1000);

body.addEventListener('click', fastClick);
}