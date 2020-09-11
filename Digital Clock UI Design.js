function clock() {
    
    'use strict';
    
    var hours = document.getElementById("hour"),
        minutes =  document.getElementById("minutes"),
        seconds = document.getElementById("seconds"),
    
        h = new Date().getHours(),
        m = new Date().getMinutes(),
        s = new Date().getSeconds();
    
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
}

var interval = setInterval(clock, 1000);