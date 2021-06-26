let brick_container = document.querySelector('.brick-container');

function makingBricks(n)
{
    for(let i=0;i<n;i++)
    {
        const brick = document.createElement('div');
        brick.className = 'brick';
        brick_container.appendChild(brick);
    }
}
makingBricks(36);
