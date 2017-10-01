/**
 * @author Christoffer Ekblom
 */

'use strict';

var MOON_SUN_CLOCK = {};

MOON_SUN_CLOCK.HOURS_PER_DAY = 24;
MOON_SUN_CLOCK.DEGREES_PER_TURN = 360;
MOON_SUN_CLOCK.DEGREES_PER_HOUR = MOON_SUN_CLOCK.DEGREES_PER_TURN / MOON_SUN_CLOCK.HOURS_PER_DAY;
MOON_SUN_CLOCK.MINUTES_PER_HOUR = 60;
MOON_SUN_CLOCK.SUN_MOON_PICTURE = document.getElementById("moon-sun");

MOON_SUN_CLOCK.Rotate = function() {
  MOON_SUN_CLOCK.SUN_MOON_PICTURE.style.transform = "rotate(" + MOON_SUN_CLOCK.GetAngle(new Date()) + "deg)";
}

MOON_SUN_CLOCK.GetAngle = function(time) {
  return -MOON_SUN_CLOCK.DEGREES_PER_HOUR * (time.getHours() + time.getMinutes() / MOON_SUN_CLOCK.MINUTES_PER_HOUR);
}
