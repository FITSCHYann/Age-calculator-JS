let inputDay = document.querySelector("#input-day");
let inputMonth = document.querySelector("#input-month");
let inputYear = document.querySelector("#input-year");

let errorDay = document.querySelector(".error-day");
let errorMonth = document.querySelector(".error-month");
let errorYear = document.querySelector(".error-year");

let form = document.querySelector("#global");

let outputDay = document.querySelector("#output-day");
let outputMonth = document.querySelector("#output-month");
let outputYear = document.querySelector("#output-year");

let dateActuelleUnix = Date.now();

let sYear = 31536000;
let sMonth = 2592000;
let sDay = 86400;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    errorDay.textContent.length > 2 ||
    errorMonth.textContent.length > 2 ||
    errorYear.textContent.length > 2
  ) {
    return;
  } else if (inputDay.value == "") {
    errorDay.textContent = "This field is required";
  }
  if (inputMonth.value == "") {
    errorMonth.textContent = "This field is required";
  }
  if (inputYear.value == "") {
    errorYear.textContent = "This field is required";
  } else {
    errorDay.textContent = "";
    errorMonth.textContent = "";
    errorYear.textContent = "";

    let dateNaissanceUnix = Math.floor(
      new Date(inputYear.value, inputMonth.value - 1, inputDay.value).getTime()
    );

    let betweenDatesInMs = dateActuelleUnix - dateNaissanceUnix;

    let betweenDatesInS = Math.floor(betweenDatesInMs / 1000);

    let years = Math.floor(betweenDatesInS / sYear);
    betweenDatesInS = betweenDatesInS - years * sYear;

    let months = Math.floor(betweenDatesInS / sMonth);
    betweenDatesInS = betweenDatesInS - months * sMonth;

    let days = Math.floor(betweenDatesInS / sDay);

    outputDay.textContent = days;
    outputMonth.textContent = months;
    outputYear.textContent = years;
  }
});

inputDay.addEventListener("keyup", () => {
  if (isNaN(inputDay.value)) {
    return (errorDay.textContent = "This field need a number");
  }
  if (inputDay.value.length > 2) {
    return (errorDay.textContent = "Need 2 figure max");
  }
  if (inputDay.value > 31) {
    return (errorDay.textContent = "Number between 1 & 31");
  } else {
    return (errorDay.textContent = "");
  }
});

inputMonth.addEventListener("keyup", () => {
  if (isNaN(inputMonth.value)) {
    return (errorMonth.textContent = "This field need a number");
  }
  if (inputMonth.value.length > 2) {
    return (errorMonth.textContent = "Need 2 figure max");
  }
  if (inputMonth.value > 12) {
    return (errorMonth.textContent = "Number between 1 & 12");
  } else {
    return (errorMonth.textContent = "");
  }
});

inputYear.addEventListener("keyup", () => {
  if (inputYear.value.length === 0) {
    return (errorYear.textContent = "");
  }
  if (isNaN(inputYear.value)) {
    return (errorYear.textContent = "This field need a number");
  }
  if (inputYear.value.length < 4) {
    return (errorYear.textContent = "Need 4 figure min");
  }
  if (inputYear.value.length > 4) {
    return (errorYear.textContent = "Need 4 figure max");
  } else {
    return (errorYear.textContent = "");
  }
});
