
function generatePowers() {
    for (let i of document.querySelectorAll('.brick')) {
        if(i.classList.contains("broken"))
            continue
        let numb = Math.floor(Math.random() * 12)
        if (numb === 5) {
            i.classList.add('power');
            i.classList.add('bigBall');
            console.log("power added to b")
        }
    }
}

const dropPower = function(brick) {
    if (brick.classList.contains('bigBall')) {
        let powerupTop = 0;
        let powerupLeft = 0;
        const powerup = document.createElement('div')
        mainContainer.append(powerup)
        powerup.classList.add('power-up')
        powerupTop = brick.offsetTop + brick.offsetHeight / 2
        powerupLeft = brick.offsetLeft + brick.offsetWidth / 2
        console.log(powerupTop, powerupLeft, brick.offsetTop, brick.offsetLeft)
        powerup.style.setProperty("--power-up-top", powerupTop.toString())
        powerup.style.setProperty("--power-up-left", powerupLeft.toString())
        powerup.append("P")
        const a = setInterval(() => {
            powerupTop += 2;
            powerup.style.setProperty("--power-up-top", powerupTop.toString())
            powerup.style.setProperty("--power-up-left", powerupLeft.toString())
            if (powerup) {
                if (getCollisionBetween(powerup, pad)) {
                    triggerPower(powerup)
                    powerup.remove();
                    clearInterval(a)
                } else if (powerupTop > mainContainer.offsetHeight - powerup.offsetHeight - 1) {
                    powerup.remove();
                    clearInterval(a)
                }
            }
        }, ballMoveDelay)

    }
}

let powerupTimerId = 0;

const triggerPower = (powerup) => {
    powerup.remove();
    ball.classList.add('powerball')
    powerupTimerId = setTimeout(function() {
        clearTimeout(powerupTimerId);
        ball.classList.remove('powerball');
    }, 10000);
}