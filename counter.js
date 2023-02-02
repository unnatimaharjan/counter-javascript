let count = 0;

let add=document.getElementById('plusBtn');
let subtract=document.getElementById('minusBtn');
let reset=document.getElementById('resetBtn');
let number=document.getElementById('display');

add.addEventListener('click', function(){
    count+=1;
    number.innerHTML=count;
})

subtract.addEventListener('click', function(){
    count-=1;
    number.innerHTML=count;
})

reset.addEventListener('click', function(){
    count=0;
    number.innerHTML=count;
})