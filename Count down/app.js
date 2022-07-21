const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

// Html node elements selection

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const timeItems = document.querySelectorAll('.deadline-format h4');

// Setting up the date functionality for the giveaway

let futureDate = new Date(2022, 7, 25, 17, 30, 59);
// console.log(futureDate);

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = weekdays[futureDate.getDay()];
const hour = futureDate.getHours();
const minute = futureDate.getMinutes();
const seconds = futureDate.getSeconds();

// giveaway date
giveaway.textContent = `Giveaway ends on ${day}, ${futureDate.getDate()} ${month}
${year}, ${hour}:00hrs`;

const futureTime = futureDate.getTime();
// countdown functionality
function getRemainingDate() {
  let presentTime = new Date().getTime();
  const t = futureTime - presentTime;

  //changing all the units to milliseconds
  // 1sec = 1000ms
  // 1min = 60 sec
  // 1hr  = 60mins
  // 1day = 24hrs
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSeconds = 1000;

  // remaining time for the giveaway
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return (item = `0${item}`);
    } else {
      return item;
    }
  }

  timeItems.forEach(function (item, index) {
    item.innerHTML = format(values[index]);
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">We're sorry the giveway has ended.
     If you don't want to miss the others, please sign up <a href="#">here</a></h4>`;
  }
}
// countdown
const countdown = setInterval(getRemainingDate, 1000);
getRemainingDate();
