                                    // create clock
// create a date
let today = new Date();

// assign hr, mn & sec;
let hours = today.getHours();
let minutes = today.getMinutes();
let seconds = today.getSeconds();

// display clock 
const clock = document.createElement('p');
clock.innerText = `CLOCK: \n ${checkT(hours)} : ${checkT(minutes)} : ${checkT(seconds)}`;
document.getElementById('time').appendChild(clock);

// refresh every second
setInterval(function(){
    today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();
    seconds = today.getSeconds();
    clock.innerText = `CLOCK: \n ${checkT(hours)} : ${checkT(minutes)} : ${checkT(seconds)}`;
    document.getElementById('time').appendChild(clock);
}, 1000)

//create function to add 0 when <10

function checkT (i){
    if (i<10){
        i = '0'+i;    }
    return i;
}

                                    //create stopwatch
//create watch 00:00
let mins = 00;
let secs = 00;
const section2 = document.getElementById('stopwatch');
let stopwatch = document.createElement('p');
stopwatch.innerText =`STOPWATCH: \n ${checkT(mins)} : ${checkT(secs)}`;
section2.appendChild(stopwatch);

//create start/stop button
const button = document.createElement('button');
button.innerText = 'Start / Stop';
section2.appendChild(button);
section2.style.marginBottom = '100px';
stopwatch.style.marginBottom='0';
button.style.backgroundColor = 'red';
button.style.padding = '15px 30px';
button.style.fontWeight ='bold';
button.style.fontSize='1.05rem';
button.style.marginTop='0';

//create functions & 'click' events for stopwatch
let s;

function counter(){
    s=setInterval(function() {
    secs ++;
    if(secs===60){
        mins ++;
        secs = 0;
    } 
    stopwatch.innerText = `STOPWATCH: \n ${checkT(mins)} : ${checkT(secs)}`;
}, 1000)}

function start(){
    button.removeEventListener('click', start);
    button.addEventListener('click', stop);
    counter();   
}
function stop(){
    clearInterval(s);
    button.removeEventListener('click', stop);
    button.addEventListener('click', start);
}

button.addEventListener ('click', start);

                                        //Create Timer
//create an input for seconds
const timer = document.getElementById('timer');
const label = document.createElement('label');
const input = document.createElement('input');
input.setAttribute('type', 'text');
label.innerText = 'TIMER: \n Enter time (in sec) \n';
label.style.display = 'block';
label.setAttribute('for', 'gettt')
input.style.display='block';
input.style.width='50px';
input.style.margin='auto';
input.id='gettt';
let cDown;

timer.appendChild(label);
timer.appendChild(input);

//create a button
const button2 = document.createElement('button');
button2.innerText ='Start Timer';
button2.style.backgroundColor='green';
button2.style.padding='20px';
button2.style.fontSize='1.05rem';
button2.style.fontWeight='bold';
timer.appendChild(button2);

//create function & add 'click' event
function getNum(){
    button2.removeEventListener('click', getNum);
    cDown = input.value;
    countDown()
    clearInterval(int);
}
function countDown (){
    let int = setInterval(function () {
        if(cDown < 0){
            label.innerText = `Timer: \n Done`;
            button2.addEventListener('click', getNum);
            clearInterval(int);
        } 
        else {label.innerText = `Timer: \n ${cDown} sec`;
        cDown --;}
        
    }, 1000)}

button2.addEventListener('click', getNum);