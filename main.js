const start=document.querySelector("#startButton");
const stop=document.querySelector("#stopButton");
const reset=document.querySelector("#resetButton");
const time=document.querySelector("time");
let firstTime=0;
let holdTime=0;
let progressTime=0;
let timer=undefined;


//スタートボタン
function timeStart(){
    firstTime=Date.now()-progressTime;
    stopWatch();
    
    start.disabled=true;
    stop.disabled=false;
    reset.disabled=false;
}

start.addEventListener("click",timeStart);

//ストップボタン
function timeStop(){
    clearInterval(timer);
    
    holdTime=Date.now()-firstTime;
    
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=false;
}

stop.addEventListener("click",timeStop);

//リセットボタン
function timeReset(){
    clearInterval(timer);
    
    holdTime=0;
    progressTime=0;
    time.textContent="00:00";
   
    start.disabled=false;
    stop.disabled=true;
    reset.disabled=true;
}

reset.addEventListener("click",timeReset);

//ストップウォッチ
function stopWatch(){
    timer=setTimeout(function(){
        progressTime=Date.now()-firstTime;
        const currentTime=new Date(progressTime);
        const m=String(currentTime.getMinutes()).padStart(2,"0");
        const s=String(currentTime.getSeconds()).padStart(2,"0");
        
        time.textContent=`${m}:${s}`;
        
        stopWatch();
    },1000)
}



