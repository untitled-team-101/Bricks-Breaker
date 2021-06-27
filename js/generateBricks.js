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
function generateFakeBricks(n) {
    for (let i = 0; i < n; i++)
    {
        const brick = document.createElement('div');
        brick.classList.add('brick');
        brick.classList.add('broken');
        brick_container.appendChild(brick);
    }
}

function generateLevelZero()
{
    generateFakeBricks(2);
    generateBricks(2,'l4');
    generateFakeBricks(2);
    generateFakeBricks(1);
    generateBricks(1,'l1');
    generateFakeBricks(2);
    generateBricks(1,'l1');
    generateFakeBricks(1);
    generateBricks(2,'l2');
    generateFakeBricks(2);
    generateBricks(2,'l2');
    generateBricks(2,'l3');
    generateFakeBricks(2);
    generateBricks(2,'l3');
    generateBricks(2,'l2');
    generateFakeBricks(2);
    generateBricks(2,'l2');
    generateFakeBricks(1);
    generateBricks(1,'l1');
    generateFakeBricks(2);
    generateBricks(1,'l1');
    generateFakeBricks(1);
    generateFakeBricks(2);
    generateBricks(2,'l4');
    generateFakeBricks(2);
}

function generateLevelOne()
{
    generateBricks(6,'l3');
    generateBricks(12,'l4');
    generateBricks(6,'l2');
    generateBricks(12,'l1');
}

function generateLevelTwo(){

    generateFakeBricks(6);
    generateFakeBricks(2);
    generateBricks(2,'l3');
    generateFakeBricks(2);
    generateBricks(6,'l4');
    generateFakeBricks(1);
    generateBricks(4,'l1');
    generateFakeBricks(1);
    generateFakeBricks(6);
    generateBricks(1,'l3')
    generateFakeBricks(1);
    generateBricks(1,'l1');
    generateBricks(1,'l1')
    generateFakeBricks(1);
    generateBricks(1,'l3');
    generateFakeBricks(6);
    generateBricks(6,'l2');
    generateBricks(6,'l4');
    generateBricks(6,'l2');
}

function generateLevelThree(){
    generateBricks(6,'l2');

    generateBricks(2,'l4');
    generateFakeBricks(2);
    generateBricks(2,'l4');
    generateFakeBricks(6);
    generateBricks(6,'l1');
    generateFakeBricks(6);
    generateBricks(12,'l3');
    generateFakeBricks(6);
    generateBricks(1,'l1');
    generateBricks(1,'l2');
    generateBricks(1,'l3');
    generateBricks(1,'l3');
    generateBricks(1,'l2');
    generateBricks(1,'l1');
}

generateLevelZero();