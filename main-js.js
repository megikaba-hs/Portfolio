document.getElementById("aboutLink").addEventListener("click", function () {
  window.open("about-me.html");
});

document.getElementById("serviceLink").addEventListener("click", function () {
  window.open("service.html");
});

document.getElementById("portfolioLink").addEventListener("click", function () {
  window.open("myportfolio.html");
});

document.getElementById("contactLink").addEventListener("click", function () {
  window.open("contact-me.html", "_blank");
});

document
  .getElementById("experiencesLink")
  .addEventListener("click", function () {
    window.open("experiences.html");
  });

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
