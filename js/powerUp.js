let brick = document.querySelectorAll('.brick');
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10, 11, 12];

function generatePowers() {
    for (let i of brick) {
        let numb = number[Math.floor(Math.random() * number.length)];
        if (numb === 0) {
            i.classList.add('power');
            i.classList.add('bigBall');
        }
    }
}

generatePowers();

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