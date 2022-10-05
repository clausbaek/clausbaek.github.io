const clockTitle = document.querySelector(".js-clock");
const dateform = document.querySelector(".Select");

const ChristmasDate = new Date(2022, 11, 25);
const BigHighschoolTest = new Date(2022, 10, 17);


let DefaultDate = ChristmasDate;

let designatedDate = DefaultDate;

setInterval(function () {



  function changedate(event) {
    event.preventDefault;
    let buttonType = event.srcElement.value;
    if (document.querySelector("#The2022ChristmasDate").value === buttonType) {
      designatedDate = ChristmasDate;
    }
    else if (document.querySelector("#The2022수능").value === buttonType) {
      designatedDate = BigHighschoolTest;
    }
    else {
      console.log("somehitn wrung");
    }}
console.log(designatedDate,"after changedatefunction")

    function inputDate(event) {
      event.preventDefault();

      let inputyear = document.querySelector("#InputYear").value;
      let inputmonth = document.querySelector("#InputMonth").value - 1;
      let inputdate = document.querySelector("#InputDate").value;
      designatedDate = new Date(inputyear, inputmonth, inputdate);





    }



    dateform.querySelector("#The2022ChristmasDate").addEventListener("click", changedate);

    dateform.querySelector("#The2022수능").addEventListener("click", changedate);
    dateform.querySelector("button").addEventListener("click", inputDate);


    CountdownDisplay()

    function CountdownDisplay() {
      let today = new Date();

      let timeleft = designatedDate - today;
      let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
      let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      let daysleft = `${days}days ${hours}h:${minutes}m:${seconds}s left `;

      clockTitle.innerText = `${daysleft}`;
    }

  }, 1000);
