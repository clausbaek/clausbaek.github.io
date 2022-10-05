const clockTitle = document.querySelector(".js-clock");
const dateform = document.querySelector(".Select");
const DefaultDate = new Date(2022, 11, 25);
let designatedDate = DefaultDate;
console.log(document.querySelector(".Select"));
setInterval(function () {
  function inputDate(event) {
    event.preventDefault();

    let inputyear = document.querySelector("#InputYear").value;
    let inputmonth = document.querySelector("#InputMonth").value - 1;
    let inputdate = document.querySelector("#InputDate").value;
    designatedDate = new Date(inputyear, inputmonth, inputdate);

    console.log(designatedDate, "date");
  }

  dateform.querySelector("button").addEventListener("click", inputDate);

  let today = new Date();

  let timeleft = designatedDate - today;
  let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  let daysleft = `${days}days ${hours}h:${minutes}m:${seconds}s left `;

  clockTitle.innerText = `${daysleft}`;
}, 1000);
