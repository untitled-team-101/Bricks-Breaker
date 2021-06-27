let brick = document.querySelectorAll('.brick');
let number = [1,2,3,4,5,6,7,8,9,0,10,11,12];

function generatePowers(){
    for(let i of brick)
    {
        let numb = number[Math.floor(Math.random()*number.length)];
        if(numb == 0)
        {
            i.classList.add('bigBall');
        }
        else if(numb == 1)
        {
            i.classList.add('bigPad');
        }
    }
}
generatePowers();