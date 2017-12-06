var display = document.getElementById('display');

var time;
var count;

function upload() {

    display.innerHTML = (Math.floor(time / 60) < 10 ? "0" : "") + Math.floor(time / 60) + ":" + (Math.floor(time % 60) < 10 ? "0" : "") + Math.floor(time % 60);

}

function countdown() {
    time--;
    upload();
    if (time == 0) {
        reset();
        alarm.play();
    }

}

function start() {
    count = setInterval(countdown, 1000);
    time = 1500;
    upload();

}

function shortbreak() {
    count = setInterval(countdown, 1000);
    time = 300;
    upload();

}

function longbreak() {
    count = setInterval(countdown, 1000);
    time = 900;
    upload();

}

function reset() {
    clearInterval(count);
    time = 0;
    upload();

}