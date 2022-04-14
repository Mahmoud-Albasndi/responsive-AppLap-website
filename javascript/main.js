let list = document.querySelector(".list-style");
let menu = document.querySelector(".menu");
let closeopen = document.querySelectorAll(".list-style li a");
// toggler class to ul open
menu.addEventListener("click", function () {
  list.classList.toggle("open");
});

//remove class open from navbar and link
closeopen.forEach((e) => {
  e.addEventListener("click", function () {
    list.classList.remove("open");
  });
});

//change background header
let hed = document.getElementById("-header");
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    hed.classList.add("_header-boxshadow");
  } else {
    hed.classList.remove("_header-boxshadow");
  }
});

// Testimonal slider function
let container = document.querySelectorAll(".testmi_content .box");
let arrayDiv = Array.from(container);
let nextbtn = document.getElementById("next");
let prevbtn = document.getElementById("previos");

// Get Number of length
let count = arrayDiv.length;

let cuurnt = 1;

thechker();
nextbtn.onclick = nextSlide;
prevbtn.onclick = prevSlide;
function nextSlide() {
  if (cuurnt == count) {
    return false;
  } else {
    cuurnt++;
    thechker();
  }
}
function prevSlide() {
  if (cuurnt == 1) {
    return false;
  } else {
    cuurnt--;
    thechker();
  }
}

function thechker() {
  removeClass();
  arrayDiv[cuurnt - 1].classList.add("show");
}

function removeClass() {
  arrayDiv.forEach((e) => {
    e.classList.remove("show");
  });
}

//  FAQ section //

let questions = Array.from(document.querySelectorAll(".container .questions"));

let ansWer = document.querySelectorAll(".ansWer");
let icon = document.getElementsByClassName("icon");

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    if (parseInt(ansWer[i].style.height) != ansWer[i].scrollHeight) {
      ansWer[i].style.height = ansWer[i].scrollHeight + "px";
      icon[i].classList.remove("fa-plus");
      icon[i].classList.add("fa-minus");
    } else {
      ansWer[i].style.height = "0px";
      icon[i].classList.remove("fa-minus");
      icon[i].classList.add("fa-plus");
    }
  });
}

//     ScrollReveal Animation

let sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2500,
  delay: 400,

  //rest: true
});

sr.reveal(".landing .info", { origin: "left", delay: 400 });
sr.reveal(".landing .photo", { origin: "right", delay: 450 });
sr.reveal(".turstes span", { origin: "top", delay: 500 });
sr.reveal(".image_tursted", { origin: "bottom", delay: 600 });
sr.reveal(".features .photo", { origin: "left", delay: 700 });
sr.reveal(".features .info", { origin: "right", delay: 800 });
sr.reveal(".jackpot .heading", { origin: "top", delay: 900 });
sr.reveal(".jackpot .text", { origin: "top", delay: 1000 });
sr.reveal(".smart_jackpot .container", { origin: "bottom", delay: 1100 });
sr.reveal(".integration .photo", { origin: "left", delay: 800 });
sr.reveal(".integration .info", { origin: "right", delay: 800 });
sr.reveal(".main-title", { origin: "top", delay: 1000 });
sr.reveal(".our_app .container", { origin: "bottom", delay: 1000 });
sr.reveal(".features-app", { origin: "left", delay: 700 });
sr.reveal(".ul-featuers .photo", { origin: "right", delay: 700 });
sr.reveal(".pricing_pay .box", { origin: "top", delay: 900 });
sr.reveal(".Testimonial_contant .people_images", {
  origin: "left",
  delay: 900,
});
sr.reveal(".Testimonial_contant .info", {
  origin: "right",
  interval: 300,
  delay: 900,
});
sr.reveal(".FAQ .container", {
  origin: "top",
  delay: 1000,
});
sr.reveal("footer .container", {
  origin: "top",
  delay: 1000,
});
