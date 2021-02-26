var seconds = 60;
var countdown;

function add(){
    seconds += 5 ;
    document.getElementById("countdown").innerHTML = seconds; 
}

function remove(){
    if (seconds-5>0){
        seconds -= 5 ;
    document.getElementById("countdown").innerHTML = seconds
    }else{
        alert("Can't be negetive")
    }
    

}

function startTimer(){
    if (countdown === undefined){
    countdown = setInterval(function(){
        seconds--;
        (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s" ;
        (seconds == 0) ?  endTimer() : document.getElementById("plural").textContent = "s" ;
        document.getElementById("countdown").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
    },1000);} else {
        alert("Timer already running")
    }

}

function endTimer(){
    clearInterval(countdown);
    seconds = 60;
    document.getElementById("countdown").innerHTML = 60;
    countdown = undefined;
}

function pauseTimer(){
    clearInterval(countdown);
    countdown = undefined;
}



