function assert(test, expected, actual) {
  if(expected != actual) {
    throw "TEST [" + test + "] FAILED\n  [" + expected + "], actual : [" + actual + "]";
  }
  else {
  	console.log("%c%s", "color:#0f0", "TEST [" + test + "] PASSED");
  }
}
