MOON_SUN_CLOCK.TESTS = {};
MOON_SUN_CLOCK.TESTS.TEST = {};
MOON_SUN_CLOCK.TESTS.time = new Date();

MOON_SUN_CLOCK.TESTS.TEST[0] = function() {
  MOON_SUN_CLOCK.TESTS.time.setHours(0);
  MOON_SUN_CLOCK.TESTS.time.setMinutes(0);
  Assert("should be 0", 0, MOON_SUN_CLOCK.GetAngle(MOON_SUN_CLOCK.TESTS.time));
}

MOON_SUN_CLOCK.TESTS.TEST[1] = function() {
  MOON_SUN_CLOCK.TESTS.time.setHours(0);
  MOON_SUN_CLOCK.TESTS.time.setMinutes(4);
  Assert("should be -1", -1, MOON_SUN_CLOCK.GetAngle(MOON_SUN_CLOCK.TESTS.time));
}

MOON_SUN_CLOCK.TESTS.TEST[2] = function() {
  MOON_SUN_CLOCK.TESTS.time.setHours(1);
  MOON_SUN_CLOCK.TESTS.time.setMinutes(0);
  Assert("should be -15", -15, MOON_SUN_CLOCK.GetAngle(MOON_SUN_CLOCK.TESTS.time));
}

MOON_SUN_CLOCK.TESTS.TEST[3] = function() {
  MOON_SUN_CLOCK.TESTS.time.setHours(23);
  MOON_SUN_CLOCK.TESTS.time.setMinutes(0);
  Assert("should be -345", -345, MOON_SUN_CLOCK.GetAngle(MOON_SUN_CLOCK.TESTS.time));
}

MOON_SUN_CLOCK.TESTS.TEST[4] = function() {
  MOON_SUN_CLOCK.TESTS.time.setHours(23);
  MOON_SUN_CLOCK.TESTS.time.setMinutes(56);
  Assert("should be -359", -359, MOON_SUN_CLOCK.GetAngle(MOON_SUN_CLOCK.TESTS.time));
}

MOON_SUN_CLOCK.TESTS.Run = function(tests) {
  for(let test in tests) {
    MOON_SUN_CLOCK.TESTS.TEST[test]();
  }
}
