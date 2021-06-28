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

function generateLevelOne()
{
    generateBricks(10,'l2');
    generateBricks(10,'l1');
    generateBricks(10,'l2');
    generateBricks(10,'l1');
    generateFakeBricks(10);
    generateBricks(10,'l1');
    generateFakeBricks(10);
    generateBricks(10,'l2');

}

function generateLevelTwo()
{
    generateBricks(10,'l1');
    generateBricks(10,'l3');
    generateFakeBricks(10);
    generateBricks(10,'l2');
    generateFakeBricks(10);
    generateBricks(10,'l2');
    generateBricks(10,'l1');
}

function generateLevelThree(){

    generateFakeBricks(10);
    generateFakeBricks(3);
    generateBricks(4,'l3');
    generateFakeBricks(3);
    generateBricks(3,'l4');
    generateFakeBricks(4);
    generateBricks(3,'l1');
    generateFakeBricks(10);
    generateBricks(2,'l3');
    generateBricks(2,'l2')
    generateFakeBricks(2);
    generateBricks(2,'l2');
    generateBricks(2,'l3');
    generateBricks(10,'l4');
    generateBricks(10,'l1');
    generateFakeBricks(10);
    generateBricks(10,'l4')
    generateBricks(10,'l2')
}

function generateLevelFour(){
    generateBricks(10,'l1');
    generateFakeBricks(1);
    generateBricks(2,'l4');
    generateFakeBricks(4);
    generateBricks(2,'l4');
    generateFakeBricks(1);
    generateBricks(10,'l3');
    generateFakeBricks(1);
    generateBricks(2,'l2');
    generateFakeBricks(4);
    generateBricks(2,'l2');
    generateFakeBricks(1);
    generateBricks(10,'l4');
    generateBricks(10,'l1');
    generateFakeBricks(10);
    generateBricks(10,'l4')
}


function generateLevelFive(){
    generateFakeBricks(1);
    generateBricks(1,'l4');
    generateFakeBricks(6);
    generateBricks(1,'l4');
    generateFakeBricks(3);
    generateBricks(1,'l4');
    generateFakeBricks(4);
    generateBricks(1,'l4');
    generateFakeBricks(3);
    generateBricks(8,'l4');
    generateFakeBricks(1);
    generateBricks(3,'l4');
    generateBricks(1,'l1');
    generateBricks(2,'l4');
    generateBricks(1,'l1');
    generateBricks(3,'l4');
    generateBricks(10,'l4');
    generateFakeBricks(2);
    generateBricks(7,'l4');
    generateFakeBricks(1);
    generateFakeBricks(2);
    generateBricks(1,'l4');
    generateFakeBricks(5,'l4');
    generateBricks(1,'l4');
    generateFakeBricks(1);
    generateFakeBricks(3);
    generateBricks(2,'l4');
    generateFakeBricks(1);
    generateBricks(2,'l4');

}

function generateLevelZero()
{
    generateFakeBricks(80)
    generateFakeBricks(4);
    generateBricks(2,'l1');
}

generateLevelZero();