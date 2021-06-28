var startModal = document.getElementById("startModal");
var modals1 = document.getElementById("M1");
var modals2 = document.getElementById("M2");
var modals3 = document.getElementById("M3");
var modals4 = document.getElementById("M4");
var modals5 = document.getElementById("M5");

var nextModal = document.getElementById("nextModal");
var endModal = document.getElementById("endModal");

let startbtn = document.getElementsByClassName("startbtn")[0];

startbtn.addEventListener('click',function (){
    modals1.classList.add('active');
});

function click(mod1,mod2){
    mod1.addEventListener('click',function (){
        mod2.classList.add('active');
    });
}

click(modals1,modals2);
click(modals2,modals3);
click(modals3,modals4);
click(modals4,modals5);

modals5.addEventListener('click',function (){
    modals4.classList.remove('active');
    modals3.classList.remove('active');
    modals2.classList.remove('active');
    modals1.classList.remove('active');
    modals5.classList.remove('active');
    startModal.classList.remove('active');
})

let currentLevel = 1;
function nextLevel(){
    brick_container.innerHTML = '';
    nextModal.classList.add('active');
    let next = document.querySelector('.next');
    next.addEventListener('click',function ()
    {
        if(currentLevel === 1)
        {
            generateLevelOne();
            ballMoveDelay = 8;
        }
        else if(currentLevel === 2)
        {
            generateLevelTwo();
            ballMoveDelay = 7;
        }
        else if(currentLevel === 3)
        {
            generateLevelThree();
            ballMoveDelay = 6;
        }
        else if(currentLevel === 4)
        {
            generateLevelFour();
            ballMoveDelay = 5;
        }
        else if(currentLevel === 5)
        {
            generateLevelFive();
            ballMoveDelay = 4;
        }
        generatePowers();
        currentLevel++;
        nextModal.classList.remove('active');
        mainContainer = document.querySelector(".main-container")
        pad = document.querySelector("#pad");
        ball = document.querySelector("#ball");
        bricks = document.querySelectorAll(".brick")
        gameRunning = 0;
        padCollisionPoint = 0;
        ballsLife = maxLives;
        timerId = 0;
        ballsDirection = {
            left: 0,
            top: 0
        }
        ballTop = pad.offsetTop - ball.offsetHeight;
        ballLeft = pad.offsetLeft + pad.offsetWidth/2 - ball.offsetWidth/2;
        mainContainer.style.setProperty("--ball-left", ballLeft.toString())
        mainContainer.style.setProperty("--ball-top", ballTop.toString())
        document.getElementById("score").innerText = totalScore.toString()
        document.getElementById("lives").innerText = ballsLife.toString()
        clearInterval(timerId);
    })
}


document.getElementById("score").innerText = totalScore.toString()
document.getElementById("lives").innerText = ballsLife.toString()



