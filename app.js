
// function setInterval(a){

//     console.log(a);

// }

// function setTimeout(){
//     return 0;
// }


var mili = 0;
var sec = 0;
var min = 0;
var interval;
var timemili = document.getElementById('msecond');
var timesec = document.getElementById('second');
var timemin = document.getElementById('minute');



function timer() {


    timemili.innerHTML = mili;
    mili++;

    if (mili >= 100) {
        sec++
        timesec.innerHTML = sec;
        mili = 0;
    }

    else if (sec >= 60) {
        min++
        timemin.innerHTML = min;
        sec = 0;

    }
}
function start() {
    interval = setInterval(timer, 10);
   disableBtn();
}

function stop() {

    clearInterval(interval);
    enableBtn();
}

function reset() {
    clearInterval(interval);
    mili = 0;
    sec = 0;
    min = 0;
    timemin.innerHTML = 0;
    timemili.innerHTML = 0;
    timesec.innerHTML = 0;
    enableBtn();
}

function disableBtn() {
    document.getElementById("start").disabled = true;
  }
  
  function enableBtn() {
    document.getElementById("start").disabled = false;
  }
