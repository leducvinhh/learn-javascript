// using if...else
function formatSecondsV1(seconds) {
  if (seconds < 10) return `0${seconds}`;

  return seconds.toString();
}

// using slice()
function formatSecondsV2(seconds) {
  return `0${seconds}`.toString().slice(-2);
}
console.log(formatSecondsV2(1));
console.log(formatSecondsV2(10));
