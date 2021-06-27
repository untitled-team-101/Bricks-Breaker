let brick_container = document.querySelector('.brick-container');

function generateBricks(n,lev)
{
    for(let i=0;i<n;i++)
    {
        const brick = document.createElement('div');
        brick.classList.add('brick');
        brick.classList.add(lev);
        brick_container.appendChild(brick);
    }
}

function generateLevelZero()
{
    generateBricks(6,'l1');
}

function generateLevelOne()
{
    generateBricks(6,'l3');
    generateBricks(12,'l4');
    generateBricks(6,'l2');
    generateBricks(12,'l1');
}

generateLevelOne();