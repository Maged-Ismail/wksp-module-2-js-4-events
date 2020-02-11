// Exercise 1.1
// ------------
// Write an app that gives the user 1s (or 1000ms) to click anywhere on the screen.
// 
// If they click inside of the required time, you should tell them that they've won,
// else let them know that they've lost.

// Hints:
// - Target the <body>
// - setTimout is your friend.
// - You'll a flag to store whether the user has won or lost

const result = document.getElementById('result');
const body = document.querySelector('body');

let clickr = false;

function quickClick() {
    clickr = true;
    result.innerText= "YOU WIN!!";
    body.removeEventListener('click', quickClick);
    }

setTimeout(function() {
    if (!clickr) {
        result.innerText= "YOU LOOSE!!";
        body.removeEventListener('click', quickClick);
}}, 1000);


body.addEventListener('click', quickClick);
// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------