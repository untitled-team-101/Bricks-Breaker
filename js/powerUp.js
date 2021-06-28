let brick = document.querySelectorAll('.brick');
let number = [1,2,3,4,5,6,7,8,9,0,10];

function generatePowers(){
    for(let i of brick) {
        let numb = number[Math.floor(Math.random() * number.length)];
        if (numb === 0) {
            if(!(i.classList.contains('broken')) && !(i.classList.contains('solid')))
            {
                i.classList.add('power');
                i.classList.add('bigBall');
            }
        } else if (numb === 1) {
            if(!(i.classList.contains('broken')) && !(i.classList.contains('solid'))) {
                i.classList.add('power');
                i.classList.add('bigPad');
            }
        }
    }
}

generatePowers();

const dropPower = (brick) => {
    if (brick.classList.contains('bigBall')) {
        let powerupTop = 0;
        let powerupLeft = 0;
        const powerup = document.createElement('div')
        mainContainer.append(powerup)
        powerup.classList.add('power-up')
        powerupTop = brick.offsetTop + brick.offsetHeight/2
        powerupLeft = brick.offsetLeft+ brick.offsetWidth/2
        console.log(powerupTop, powerupLeft, brick.offsetTop, brick.offsetLeft)
        powerup.style.setProperty("--power-up-top", powerupTop.toString())
        powerup.style.setProperty("--power-up-left", powerupLeft.toString())

        let a = setInterval(() => {
            powerupTop += 2;
            powerup.style.setProperty("--power-up-top", powerupTop.toString())
            powerup.style.setProperty("--power-up-left", powerupLeft.toString())
            if (powerup) {
                if (powerupLeft > pad.offsetLeft && powerupLeft < pad.offsetLeft + pad.offsetWidth && powerup && powerupTop > mainContainer.offsetHeight - pad.offsetHeight - powerup.offsetHeight) {
                    triggerPower()
                    powerup.parentNode.removeChild(powerup)
                    clearInterval(a)
                }
                if (powerup && powerupTop > mainContainer.offsetHeight - powerup.offsetHeight) {
                    console.log()
                    powerup.parentNode.removeChild(powerup)
                    clearInterval(a)
                }
            }
        }, ballMoveDelay)

    }
}

const triggerPower = () => {
    console.log("POWER")
}