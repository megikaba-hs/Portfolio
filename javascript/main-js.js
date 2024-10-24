

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
function redirectToAboutMe() {
  window.location.href = "about-me.html";
}

function redirectToServices() {
  window.location.href = "service.html";
}

function redirectToContact() {
  window.location.href = "contact-me.html";
}

function redirectToPortfolio() {
  window.location.href = "myportfolio.html";
}

function redirectToExperiences() {
  window.location.href = "experiences.html";

}
