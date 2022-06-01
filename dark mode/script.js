var btn = document.querySelector('.btn');
var box = document.querySelector('.box');
var dec = document.querySelector('.dec');


btn.addEventListener('click', ()=>{
    if(btn.checked === true){
        box.style.backgroundColor = "black";
        dec.style.color = 'white';
        console.log('checked');
    }else{
        box.style.backgroundColor = 'white';
        dec.style.color = "black";
        console.log('un-checked');
    }
})
