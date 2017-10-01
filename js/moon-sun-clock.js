'use strict';

var MOON_SUN_CLOCK = {};

MOON_SUN_CLOCK.HOURS_PER_DAY = 24;
MOON_SUN_CLOCK.DEGREES_PER_TURN = 360;
MOON_SUN_CLOCK.DEGREES_PER_HOUR = MOON_SUN_CLOCK.DEGREES_PER_TURN / MOON_SUN_CLOCK.HOURS_PER_DAY;
MOON_SUN_CLOCK.MINUTES_PER_HOUR = 60;
MOON_SUN_CLOCK.SUN_MOON_PICTURE = document.getElementById("moon-sun");
MOON_SUN_CLOCK.CLOCK = document.getElementById("clock");

MOON_SUN_CLOCK.Start = function(interval) {
	MOON_SUN_CLOCK.RunLoop();
    setInterval(MOON_SUN_CLOCK.RunLoop, interval);
}

MOON_SUN_CLOCK.RunLoop = function() {
    let time = new Date();
	MOON_SUN_CLOCK.Rotate(time);
	MOON_SUN_CLOCK.ShowClock(time);
}

MOON_SUN_CLOCK.Rotate = function(time) {
  MOON_SUN_CLOCK.SUN_MOON_PICTURE.style.transform = "rotate(" + MOON_SUN_CLOCK.GetAngle(time) + "deg)";
}

MOON_SUN_CLOCK.GetAngle = function(time) {
  return -MOON_SUN_CLOCK.DEGREES_PER_HOUR * (time.getHours() + time.getMinutes() / MOON_SUN_CLOCK.MINUTES_PER_HOUR);
}

MOON_SUN_CLOCK.ShowClock = function(time) {
  MOON_SUN_CLOCK.CLOCK.innerText =  MOON_SUN_CLOCK.LeadingZero(time.getHours()) + ":" + MOON_SUN_CLOCK.LeadingZero(time.getMinutes()) + ":" +  MOON_SUN_CLOCK.LeadingZero(time.getSeconds());
}

MOON_SUN_CLOCK.LeadingZero = function(number) {
  return ("0" + number).slice(-2);
}
