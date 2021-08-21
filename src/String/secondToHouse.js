const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  const hour = `0${Math.trunc(seconds / SECONDS_PER_HOUR)}`.slice(-2);
  const minutes = `0${Math.trunc((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN)}`.slice(-2);
  const second = `0${Math.trunc(seconds % SECONDS_PER_MIN)}`.slice(-2);

  return `${hour}:${minutes}:${second}`;
}
console.log(formatTime(10800));
