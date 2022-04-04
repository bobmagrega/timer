'use strict';


const deadline = '2022-04-16';

function getTimeRemaining(endtime) {

    const t = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(t / (1000 * 60 * 60 * 24)),
          hours = Math.floor(t / (1000 * 60 * 60) % 24),
          minutes = Math.floor((t / 1000 / 60) % 60),
          seconds = Math.floor((t / 1000) % 60);

          return {
              'total' : t,
              days,
              hours,
              minutes,
              seconds
          };

}

function setClock(selector, endtime) {

const timer = document.querySelector(selector),
      days = timer.querySelector('.days'),
      hours = timer.querySelector('.hours'),
      minutes = timer.querySelector('.minutes'),
      seconds = timer.querySelector('.seconds'),
      timeInterval = setInterval(updateClock, 1000);

      updateClock();

      function updateClock() {
        
        const t = getTimeRemaining(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }

    
      }

}

function getZero(addZero) {

if (addZero < 10 && addZero >= 0) {
    return `0${addZero}`;
}
else {
    return addZero;
}


}

setClock(".timer_wrapper", deadline);



function movePlane () {

    const element = document.querySelector('.plane');
    let pos = window.screen.width - window.screen.width - 300;


    const interval = setInterval(moveAnimation, 1);

    function moveAnimation() {

        if (pos == window.screen.width + 500) {
            clearInterval(interval);
            setTimeout(movePlane, 5000);
           
            
        } else {
            pos++;
            element.style.left = pos + "px";

    }

}}

// setInterval(movePlane, 11000);
movePlane();

