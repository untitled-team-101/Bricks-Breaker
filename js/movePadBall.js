let mainContainer = document.querySelector(".main-container")
let pad = document.querySelector("#pad");
let ball = document.querySelector("#ball");
let bricks = document.querySelectorAll(".brick")

mainContainer.addEventListener("mousemove", (event) => {
    let left = event.clientX - event.target.offsetLeft
    left -= pad.offsetWidth / 2
    if(left < 0)
        return
    if(left > event.target.offsetWidth - pad.offsetWidth - 2)
        return
    mainContainer.style.setProperty("--pad-left", left.toString())
})

let ballTop = 0
let ballLeft = 0
let ballMoveDelay = 100;
let ballsLife = 3;
let timerId = 0;

let ballsDirection = {
    left: 0,
    top: 0
}

const startBallMove = () => {
    ballTop = mainContainer.offsetHeight/2 - ball.offsetHeight/2;
    ballLeft = mainContainer.offsetWidth/2 - ball.offsetWidth/2;
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
            if(bottom1 - top2 > ballsDirection.top){
                console.log("ltr")
            }
            else{
                console.log("ttb")
            }
            return true
        }
        if(top1 < bottom2 && top1 > top2){
            //btt collision
            if(top1 - bottom2 > ballsDirection.top){
                console.log("ltr")
            }
            else{
                console.log("btt")
            }
            return true
        }
    }
    if(left1 > left2 && left1 < right2){
        //rtl collision
        if(bottom1 > top2 && bottom1 < bottom2){
            //ttb collision
            if(bottom1 - top2 > ballsDirection.top){
                console.log("rtl")
            }
            else{
                console.log("ttb")
            }
            return true
        }
        if(top1 < bottom2 && top1 > top2){
            //btt collision
            if(top1 - bottom2 > ballsDirection.top){
                console.log("rtl")
            }
            else{
                console.log("btt")
            }
            return true
        }
    }
    return false
}

const checkPadCollision = () => {
    if(getCollisionBetween(ball, pad)){
        ballsDirection.top *= -1
        while (ballTop + ball.offsetHeight > pad.offsetTop)
            ballTop--
    }
}

const checkBrickCollision = () => {
    for(let brick of bricks){
        if(brick.classList.contains("broken"))
            continue
        if(getCollisionBetween(ball, brick)){
            brick.classList.add("broken")
            // brick.outerHTML = ""
            return
        }
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
}

const startGame = () => {
    startBallMove()
    timerId = setInterval(moveBall, ballMoveDelay)
}

startGame();
