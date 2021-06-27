let mainContainer = document.querySelector(".main-container")
let pad = document.querySelector("#pad");
let ball = document.querySelector("#ball");
let bricks = document.querySelectorAll(".brick")

let gameRunning = 0;
let ballTop = 0
let ballLeft = 0
let ballMoveDelay = 5;

let padCollisionPoint = 0;
let ballsLife = 100;
let timerId = 0;
let ballsDirection = {
    left: 0,
    top: 0
}

mainContainer.addEventListener("mousemove", (event) => {
    let padLeft = event.clientX - event.target.offsetLeft
    padLeft -= pad.offsetWidth / 2
    if(padLeft < 0)
        return
    if(padLeft > event.target.offsetWidth - pad.offsetWidth - 2)
        return
    mainContainer.style.setProperty("--pad-left", padLeft.toString())
    if (gameRunning === 0) {
        ballLeft = padLeft + pad.offsetWidth / 2 - ball.offsetWidth / 2
        mainContainer.style.setProperty("--ball-left", ballLeft.toString())
    }
})

const startBallMove = () => {
    ballTop = mainContainer.offsetHeight - pad.offsetHeight*1.25 - ball.offsetHeight;
    ballsDirection = {
        left: 3,
        top: -3
    }
}

const onBallDropped = () => {
    ballsLife--;
    console.log("life gone")
    if(ballsLife === 0){
        console.log("game over")
        // alert("game over")
        clearInterval(timerId)
        ballsDirection = {
            left: 0,
            top: 0
        }
    }
    else
        startBallMove()
}

const getCollisionBetween = (element1, element2) => {
    let left1 = element1.offsetLeft
    let left2 = element2.offsetLeft
    let top1 = element1.offsetTop
    let top2 = element2.offsetTop

    let right1 = left1 + element1.offsetWidth
    let right2 = left2 + element2.offsetWidth
    let bottom1 = top1 + element1.offsetHeight
    let bottom2 = top2 + element2.offsetHeight

    if(right1 > left2 && right1 < right2){
        //ltr collision
        if(bottom1 > top2 && bottom1 < bottom2){
            //ttb collision
            if(bottom1 - top2 > right1 - left2){
                console.log("111")
                return "ltr"
            }
            else {
                console.log("112")
                return "ttb"
            }
        }
        if(top1 < bottom2 && top1 > top2){
            //btt collision
            if(top1 - bottom2 > right1 - left2){
                console.log("121")
                return "ltr"
            }
            else{
                console.log("122")
                return "btt"
            }
        }
    }
    if(left1 < right2 && left1 > left2){
        //rtl collision
        if(bottom1 > top2 && bottom1 < bottom2){
            //ttb collision
            if(bottom1 - top2 > right2 - left1){
                console.log("211")
                return "rtl"
            }
            else{
                console.log("212")
                return "ttb"
            }
        }
        if(top1 < bottom2 && top1 > top2){
            //btt collision
            if(top1 - bottom2 > right2 - left1){
                console.log("221")
                return "rtl"
            }
            else{
                console.log("222")
                return "btt"
            }
        }
    }
    return false
    // return type [1/0/-1, 1/0/-1] i.e. [ttb//btt, ltr//rtl]
}

const checkPadCollision = () => {
    if(getCollisionBetween(ball, pad)){
        padCollisionPoint = ball.offsetLeft + ball.offsetWidth/2;
        if (padCollisionPoint < (pad.offsetLeft + pad.offsetWidth/4)) {
            ballsDirection.left = -Math.sqrt(14)
            ballsDirection.top = -2
            console.log("1")
        } else if (padCollisionPoint < (pad.offsetLeft + pad.offsetWidth/2)){
            ballsDirection.left = -2
            ballsDirection.top = -Math.sqrt(14)
            console.log("2")
        } else if (padCollisionPoint >= (pad.offsetLeft + pad.offsetWidth/2) && padCollisionPoint < (pad.offsetLeft + pad.offsetWidth/4*3)){
            ballsDirection.left = 2
            ballsDirection.top = -Math.sqrt(14)
            console.log("3")
        } else {
            ballsDirection.left = Math.sqrt(14)
            ballsDirection.top = -2
            console.log("4")
        }
        while (ballTop + ball.offsetHeight > pad.offsetTop)
            ballTop--
    }
}

const onCollisionWithBrick = (ball, brick,collision) => {
    if(brick.classList.contains('l1'))
    {
        brick.classList.remove('l1');
        brick.classList.add("broken");
    }
    else if(brick.classList.contains('l4'))
    {
        brick.classList.remove('l4');
        brick.classList.add('l3');
    }
    else if(brick.classList.contains('l3'))
    {
        brick.classList.remove('l3');
        brick.classList.add('l2');
    }
    else if(brick.classList.contains('l2'))
    {
        brick.classList.remove('l2');
        brick.classList.add('l1');
    }
}

let ignoreBrickCollision = false
const checkBrickCollision = () => {
    if(ignoreBrickCollision)
        return
    for(let brick of bricks){
        if(ignoreBrickCollision)
            return
        if(brick.classList.contains("broken"))
            continue

        let collision = getCollisionBetween(ball, brick)

        if(!collision)
            continue

        onCollisionWithBrick(ball, brick,collision);
        ignoreBrickCollision = true
        setTimeout(()=> {
            ignoreBrickCollision = false
        }, ballMoveDelay*2)

        if(collision === "rtl" || collision === "ltr")
            ballsDirection.left *= -1
        if(collision === "ttb" || collision === "btt")
            ballsDirection.top *= -1
    }
}




const checkWallCollision = () => {
    if(ballLeft > mainContainer.offsetWidth - ball.offsetWidth - 1)
        ballsDirection.left *= -1
    if(ballLeft <  1)
        ballsDirection.left *= -1
    if(ballTop < 1)
        ballsDirection.top *= -1
    if(ballTop > mainContainer.offsetHeight - ball.offsetWidth - 1)
        onBallDropped()
}

const checkCollision = () => {
    checkWallCollision()
    checkBrickCollision()
    checkPadCollision()
}

const moveBall = () => {
    ballTop += ballsDirection.top;
    ballLeft += ballsDirection.left;
    mainContainer.style.setProperty("--ball-left", ballLeft.toString())
    mainContainer.style.setProperty("--ball-top", ballTop.toString())
    checkCollision();
    checkEndgame();
}

function checkEndgame() {
    if(document.querySelectorAll('.broken').length === bricks.length){
        console.log('Game Finished');
        clearInterval(timerId);
        ball.style.opacity = '0';
    }
}

const startGame = () => {
    startBallMove();
    timerId = setInterval(moveBall, ballMoveDelay)
}


mainContainer.addEventListener("click", (event) => {
    if (gameRunning === 0) {
        gameRunning = 1;
        startGame();
    }
})

ballTop = mainContainer.offsetHeight - pad.offsetHeight*1.25 - ball.offsetHeight;
ballLeft = pad.offsetWidth/2 - ball.offsetWidth/2;
mainContainer.style.setProperty("--ball-left", ballLeft.toString())
mainContainer.style.setProperty("--ball-top", ballTop.toString())
