function Assert(test, expected, actual) {
  if(expected != actual) {
  	console.log("%c%s", "color:#f00", "TEST [" + test + "] FAILED\nexpected : [" + expected + "], actual : [" + actual + "]");
  }
  else {
  	console.log("%c%s", "color:#0f0", "TEST [" + test + "] PASSED");
  }
}
