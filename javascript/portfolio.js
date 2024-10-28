function redirectToMainPage() {
  window.location.href = "home.html";
}

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

function showModal(imageSrc) {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  modalImage.src = imageSrc; // Set the source of the modal image
  modal.style.display = "flex"; // Show the modal
}

function closeModal() {
  const modal = document.getElementById("myModal");
  modal.style.display = "none"; // Hide the modal
}

// Close modal when clicking outside the image
window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};
function toggleZoom(card) {
  const img = card.querySelector("img");
  img.classList.toggle("zoom");
}