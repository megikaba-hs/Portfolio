document.getElementById("linkedin").addEventListener("click", function () {
  window.open(
    "https://al.linkedin.com/in/megi-kaba-955a2b206?original_referer=https%3A%2F%2Fwww.google.com%2F"
  );
});

document.getElementById("facebook").addEventListener("click", function () {
  window.open("https://sq-al.facebook.com/megi.kaba37/");
});

document.getElementById("twitter").addEventListener("click", function () {
  window.open("https://x.com/?lang=en");
});

document.getElementById("instagram").addEventListener("click", function () {
  window.open("https://www.instagram.com/dta_dentaltourismalbania/");
});

document.getElementById("youtube").addEventListener("click", function () {
  window.open(
    "https://www.youtube.com/watch?v=IXucQAEkIMo&ab_channel=TahmidAhmed"
  );
});

document.getElementById("pinterest").addEventListener("click", function () {
  window.open("https://www.pinterest.com/pinterest/");
});

function redirectToMainPage() {
  window.location.href = "home.html";
}

function validateInputs() {
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  let isValid = true;

  //deletes previous error message
  document.getElementById("error-name").innerText = "";
  document.getElementById("error-email").innerText = "";

  if (name === "") {
    document.getElementById("error-name").innerText =
      "Please enter your name!";
    isValid = false;
  }

  if (message === "") {
    document.getElementById("error-message").innerText =
      "Please enter your message!";
      isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
  }
}