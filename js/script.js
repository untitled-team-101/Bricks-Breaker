let brick_container = document.querySelector('.brick-container');

function makeBricks()
{
    for(let i=0;i<6;i++)
    {
        for (let j = 0; j < 9; j++) {
            const brick = document.createElement('div');
            brick.classList.add("brick");
            if (i===0||i===1){
                brick.classList.add("l4")
            }else if(i===2){
                brick.classList.add("l3")
            }else if(i===3){
                brick.classList.add("l2")
            }else{
                brick.classList.add("l1")
            }
            brick_container.appendChild(brick);
        }
    }
}
makeBricks();

