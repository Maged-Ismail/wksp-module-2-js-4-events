const balloon = document.getElementById('balloon');

let balloonSize = 12;
balloon.style.fontSize = `${balloonSize}px`;
const MIN_SIZE = 6;
const INCREMENT = 2;
const MAX_SIZE = 100;
const MAX_EXPLOSION_SIZE = 1000;

function handleKeydown(event){
    console.log(event.key);
    //if "arrow up"
    if (event.key === 'ArrowUp'){
        console.log("UP");
        //make balloon bigger
        balloonSize += INCREMENT
        balloon.style.fontSize = `${balloonSize}px`;
        //if balloon is bigger than X, than 
        if (balloonSize > MAX_SIZE){
            //remove event listener
            document.removeEventListener('keydown', handleKeydown);
            //remove ballon and add explosion emoji (replace)
            balloon.innerText = '💥';
            //explosion emoji grows incremently (automaticly)
            const explosion = setInterval(function() {
                balloonSize +=50;
                balloon.style.fontSize = `${balloonSize}px`;
                //if explosion size is  y
                if (balloonSize > MAX_EXPLOSION_SIZE){
                    //stop growing
                    clearInterval (explosion);
                    //fade out
                    balloon.style.opacity = 0;
                }    
            }, 30);
                }
            }
    //if "arrow down"
    else if (event.key === 'ArrowDown'){
        console.log("Down");
        //if ballon is bigger than z
        if (balloonSize > MIN_SIZE){
        //make balloon smaller
        balloonSize -= INCREMENT;
        balloon.style.fontSize = `${balloonSize}px`;
        }
        
    }
}
//add event listener that listens for keydown event
document.addEventListener('keydown', handleKeydown);