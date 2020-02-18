// Exercise 1.2
// ------------
// DON'T COPY/PASTE THE LAST EXERCISE. REWRITE IT FROM SCRATCH!
// Similar to the last exercise, write an app that gives the user
// a random amount of time (up to 5 seconds) to click anywhere on the screen.
// 
// But this time, let's let the user know how much time they have to actually 'click'.
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// In short, 
// Replicate (and I mean, REWRITE it from scratch) the last exercise, and add
// - random amount of time to click
// - tell the user how much time they have to click.

const body = document.querySelector('body');
const result = document.getElementById('result');
const time = document.getElementById('time');
let rand = Math.round(Math.random()*5);
let clicked = false;
time.innerText = rand;

body.style.fontSize='3rem';
body.style.textAlign='center';
body.style.backgroundColor='lightgrey';

function fastClick(){
    clicked = true;
    result.innerText = 'YOU WIN!!';
    body.removeEventListener('click', fastClick);
}

setTimeout(function(){
    if (!clicked){
        result.innerText = 'YOU LOST!!';
        body.removeEventListener('click', fastClick);
    }
}, rand*1000);

body.addEventListener('click', fastClick);


// Challenge
// Make the countdown live...
