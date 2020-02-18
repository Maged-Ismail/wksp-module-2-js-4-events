const body = document.querySelector('body');
let win = false;
let clicked = 0;
let rand = Math.round(Math.random()*8)+1;
console.log(rand);

const btn = document.createElement('button');
btn.innerText= 'Click to Start';
btn.className ='button';
btn.id = 'startBtn';
body.appendChild(btn);
btn.addEventListener('click', game);


function game(){
    btn.removeEventListener('click', game);
    btn.style.display='none';
    const instr = document.createElement('p');
    instr.innerText=`You have 5 sec to click ${rand} buttons`;
    body.appendChild(instr);
    instr.style.fontSize='2rem';
    instr.style.textAlign='center';
    for (let i=1; i<=rand; i++){
        let newBtn = document.createElement('button');
        newBtn.className = 'nBtn';
        let btnId = `btn${i}`;
        newBtn.innerText = btnId;
        newBtn.id = btnId;
        body.appendChild(newBtn);
        newBtn.style.position= 'absolute';
        newBtn.style.bottom=`${Math.random()*500}px`;
        newBtn.style.left=`${Math.random()*400}px`;
        newBtn.style.right=`${Math.random()*400}px`;
        newBtn.addEventListener('click', clicks);
        }
    setTimeout(function(){
        if (win === false){
            let message = document.createElement('p');
            message.innerText = 'YOU LOSE!!!';
            message.style.fontSize='2rem';
            message.style.textAlign='center';
            body.appendChild(message);
            for (let i=1; i<=rand; i++){
            document.getElementById(`btn${i}`).removeEventListener('click', clicks);}
        }
    }, 5000)
}

function clicks(){
    const m2 = document.getElementById(`${event.target.id}`);
    m2.removeEventListener('click', clicks);
    m2.style.backgroundColor='green';
    clicked ++;
    if (clicked === rand){
        win = true;
        let message = document.createElement('p');
        message.innerText = 'YOU WIN!!!';
        message.style.fontSize='2rem';
        message.style.textAlign='center';
        body.appendChild(message);
        document.querySelector('.nBtn').removeEventListener('click', clicks);
    }
}

