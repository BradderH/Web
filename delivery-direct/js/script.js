const faq1Question = document.querySelector(".faq-question-box1");
const faq1Answer = document.querySelector(".faq-content1");
const faq1Svg = document.querySelector(".expand-img--1");

const faq2Question = document.querySelector(".faq-question-box2");
const faq2Answer = document.querySelector(".faq-content2");
const faq2Svg = document.querySelector(".expand-img--2");

const faq3Question = document.querySelector(".faq-question-box3");
const faq3Answer = document.querySelector(".faq-content3");
const faq3Svg = document.querySelector(".expand-img--3");

const faq4Question = document.querySelector(".faq-question-box4");
const faq4Answer = document.querySelector(".faq-content4");
const faq4Svg = document.querySelector(".expand-img--4");

//Opens and closes specific faq 1 content
faq1Question.addEventListener("click", function () {
  if (faq1Answer.classList.contains("display-none")) {
    faq1Answer.classList.remove("display-none");
    faq1Svg.textContent = "remove";
  } else {
    faq1Answer.classList.add("display-none");
    faq1Svg.textContent = "add";
  }
});

//Opens and closes specific faq 2 content
faq2Question.addEventListener("click", function () {
  if (faq2Answer.classList.contains("display-none")) {
    faq2Answer.classList.remove("display-none");
    faq2Svg.textContent = "remove";
  } else {
    faq2Answer.classList.add("display-none");
    faq2Svg.textContent = "add";
  }
});

//Opens and closes specific faq 3 content
faq3Question.addEventListener("click", function () {
  if (faq3Answer.classList.contains("display-none")) {
    faq3Answer.classList.remove("display-none");
    faq3Svg.textContent = "remove";
  } else {
    faq3Answer.classList.add("display-none");
    faq3Svg.textContent = "add";
  }
});

//Opens and closes specific faq 4 content
faq4Question.addEventListener("click", function () {
  if (faq4Answer.classList.contains("display-none")) {
    faq4Answer.classList.remove("display-none");
    faq4Svg.textContent = "remove";
  } else {
    faq4Answer.classList.add("display-none");
    faq4Svg.textContent = "add";
  }
});

//Setting the current year
const year = document.querySelector(".year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;

//////////////////////
//////Mobile Nav
const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

//Opens and closes the mobile navigation sheet.
btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
