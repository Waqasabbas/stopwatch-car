let stopwatch = {
    
    displayTime : 0, 
    resetTime : 0, 
    start_pause : 0, 
    timer : 0, 
    now : 0, 
    initialTime : () => {
      
      stopwatch.displayTime = document.getElementById("stopwatchTime");
      stopwatch.resetTime = document.getElementById("stopwatchReset");
      stopwatch.start_pause = document.getElementById("stopwatchGo");
  
      
      stopwatch.resetTime.addEventListener("click", stopwatch.resetStopwatch);
      stopwatch.resetTime.disabled = false;
      stopwatch.start_pause.addEventListener("click", stopwatch.start);
      stopwatch.start_pause.disabled = false;
    },
  
    
    updateTime :  () => {
  
      stopwatch.now++;
      let remain = stopwatch.now;
      let hours = Math.floor(remain / 3600);
      remain -= hours * 3600;
      let mins = Math.floor(remain / 60);
      remain -= mins * 60;
      let secs = remain;
  
      if (hours<10) { hours = "0" + hours; }
      if (mins<10) { mins = "0" + mins; }
      if (secs<10) { secs = "0" + secs; }
      stopwatch.displayTime.innerHTML = hours + ":" + mins + ":" + secs;
    },
  
    start : () => {
      document.querySelector(".view").style.animation = "city 50s linear infinite"
      document.querySelector(".road").style.animation = "road 5s linear infinite"
      document.querySelector(".car").style.animation = "car 1s linear infinite"
      document.querySelector(".front").style.animation = "wheel 1s linear infinite";
      document.querySelector(".back").style.animation = "wheel 1s linear infinite";

      stopwatch.timer = setInterval(stopwatch.updateTime, 1000);
      stopwatch.start_pause.value = "Pause";
      stopwatch.start_pause.removeEventListener("click", stopwatch.start);
      stopwatch.start_pause.addEventListener("click", stopwatch.stop);
    },
  
    stop  : () => {
      document.querySelector(".view").style.animation = "none";
      document.querySelector(".road").style.animation = "none";
      document.querySelector(".car").style.animation = "none";
      document.querySelector(".front").style.animation = "none";
      document.querySelector(".back").style.animation = "none";
      clearInterval(stopwatch.timer);
      stopwatch.timer = 0;
      stopwatch.start_pause.value = "Start";
      stopwatch.start_pause.removeEventListener("click", stopwatch.stop);
      stopwatch.start_pause.addEventListener("click", stopwatch.start);
    },
  
    resetStopwatch : () => {
      if (stopwatch.timer != 0) { stopwatch.stop(); }
  
      stopwatch.now = -1;
      stopwatch.updateTime();
    }
  };
  
  window.addEventListener("load", stopwatch.initialTime);
 