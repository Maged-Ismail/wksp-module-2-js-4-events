// Exercise 1.0
// ------------
// Write an app that registers a click anywhere on the screen.
// Once the user clicks, let them know that they did it!

// Hints:
// - Target the <body>
const body = document.querySelector('body');

body.style.fontSize='3rem';
body.style.textAlign='center';
body.style.backgroundColor='lightgrey';

function userClick (event){
    const message = document.createElement('p');
    message.innerText = "You Clicked!";
    body.appendChild(message);
}

document.addEventListener('click', userClick);

// OPTIONAL
// Feel free to add some CSS to this once you're done
// --------------------------------------------------