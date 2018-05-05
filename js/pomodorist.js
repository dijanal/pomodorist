
var secondsOnes = 0;
var secondsTens = 0;
var minutesOnes = 0;
var minutesTens = 0;
var timerOn = false;
var timerJustStarted = true;

function longbreak()
    {
    if (timerOn === false) 
        {
        setInterval(subtractOne, 1000);
        }
    minutesTens = 1;
    minutesOnes = 5;
    secondsTens = 0;
    secondsOnes = 0;
    document.getElementById('sec-ones').innerHTML=secondsOnes;
    document.getElementById('sec-tens').innerHTML=secondsTens;
    document.getElementById('min-ones').innerHTML=minutesOnes;
    document.getElementById('min-tens').innerHTML=minutesTens;
        
        
    timerOn = true;
    }
    
function shortbreak()
    {
    if (timerOn === false)
        {
        setInterval(subtractOne, 1000);
        }
    minutesTens = 0;
    minutesOnes = 5;
    secondsTens = 0;
    secondsOnes = 0;
    document.getElementById('sec-ones').innerHTML=secondsOnes;
    document.getElementById('sec-tens').innerHTML=secondsTens;
    document.getElementById('min-ones').innerHTML=minutesOnes;
    document.getElementById('min-tens').innerHTML=minutesTens;

        
    timerOn = true;
    }

function start()
    {
    if (timerOn === false)
        {
        setInterval(subtractOne, 1000);
        }
    minutesTens = 2;
    minutesOnes = 5;
    secondsTens = 0;
    secondsOnes = 0;
    document.getElementById('sec-ones').innerHTML=secondsOnes;
    document.getElementById('sec-tens').innerHTML=secondsTens;
    document.getElementById('min-ones').innerHTML=minutesOnes;
    document.getElementById('min-tens').innerHTML=minutesTens;

        
    timerOn = true;
    }
 
    
function secondsToMinutes()
    {
    if (minutesOnes === 0 && secondsOnes === 0 && secondsTens === 0)
        {
        minutesTens--;
        minutesOnes = 10;
        }
    if (secondsTens === 0 && secondsOnes === 0)
        {
        minutesOnes--;
        secondsTens = 6;
        }
    if ( secondsOnes === 0)
        {
        secondsTens--;
        secondsOnes = 10;
        }
    }
   
function subtractOne()
    {
    if (timerOn && minutesTens === 0 && minutesOnes === 0 && secondsTens === 0 && secondsOnes === 0)
    {

    var alarm=document.getElementById('alarm')
    addEventListener(alarm.play());
    ;

    }
    else if (timerJustStarted && secondsTens === 0 && secondsOnes === 0 && minutesOnes === 0)
        {
        minutesOnes = 9;
        secondsTens = 5;
        secondsOnes = 9;
        minutesOnes--
        timerJustStarted = false;
        }
    else if (timerJustStarted && secondsTens === 0 && secondsOnes === 0 && minutesOnes !== 0)
        {
        secondsTens = 5;
        secondsOnes = 9;
        minutesOnes--
        timerJustStarted = false;
        }
    
    document.getElementById('sec-ones').innerHTML=secondsOnes;
    document.getElementById('sec-tens').innerHTML=secondsTens;
    document.getElementById('min-ones').innerHTML=minutesOnes;
    document.getElementById('min-tens').innerHTML=minutesTens;
    secondsToMinutes(); 
    secondsOnes--;
    }
 
function reset()
    {
location.reload()
    }
