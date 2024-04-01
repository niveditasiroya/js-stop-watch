let timerDisplay = document.querySelector('.timerDisplay');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let msec = 00;
let secs = 00;
let mins = 00;

let timerId = null;
 
startBtn.addEventListener('click', function(){
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer, 10);
});

stopBtn.addEventListener('click', function(){
    clearInterval(timerId);
});

resetBtn.addEventListener('click', function(){
    clearInterval(timerId);
    timerDisplay.innerHTML = `00 : 00 : 00`;
    msec = secs = mins = 00;
});

//when we start stop watch it will run on click 
function startTimer(){
    msec++;
    if(msec == 100){
        msec = 0;
        secs++;
        if(secs == 60){
            secs = 0;
            mins++; // mins = mins + 1; (also write)
        }
    }

    // let msecString = msec < 10 ? `0${msec}` : msec;
    let msecString = msec < 10 ? `0${msec}` : msec;
    let secsString = secs < 10 ? `0${secs}` : secs;
    let minsString = mins < 10 ? `0${mins}` : mins;

    // let mescString;
    // if(msec < 10){
    //     msecString = `0${msec}`;
    // }
    // else{
    //     mescString = msec;
    // }

    // let secsString;
    // if(secs < 10){
    //     secsString = `0${secs}`;
    // }
    // else{
    //     secsString = secs;
    // }

    // let minsString;
    // if(mins < 10){
    //     minsString = `0${mins}`;
    // }
    // else{
    //     minsString = mins;
    // }

    timerDisplay.innerHTML = `${minsString} : ${secsString} : ${msecString}`;

}