var sec = 10;
function Timer(){
    if(sec == 0){
        console.log("Time Up");
        clearInterval(id);
        return;
    }
    console.log(sec);
    sec--; 
}

var id = setInterval(Timer,1000)