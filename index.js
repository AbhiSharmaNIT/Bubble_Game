let timer = 60;
let score = 0;
let Hitvalue = 0;

function IncreaseScore() {
    score += 10;
    document.querySelector("#IncScore").textContent = score;
}

function getNewHit() {
    Hitvalue = Math.floor(Math.random() * 10);
    document.querySelector("#hitvalue").textContent = Hitvalue;
}

function makeBubble() {
    let string = "";

    for (let i = 1; i < 129; i++) {
        let n = Math.floor(Math.random() * 10);
        string = string + `<div class="button">${n}</div>`
    }

    document.querySelector("#pbtn").innerHTML = string;

}

function runTimer() {
    let Time = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").textContent = timer;
        }
        else {
            clearInterval(Time);
            document.querySelector("#pbtn").innerHTML = "<h1>Game Over</h1>";
        }

    }, 1000);
}

//Event bubbling working below
document.querySelector("#pbtn").addEventListener("click",
function (value) {
    let clickedNum = Number(value.target.textContent);
    if(clickedNum === Hitvalue){
        IncreaseScore();
        getNewHit();
        makeBubble();
    }
})

getNewHit();
runTimer();
makeBubble();
