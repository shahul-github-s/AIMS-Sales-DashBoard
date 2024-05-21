const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

const scriptURL =
  "https://script.google.com/macros/s/AKfycbxhsuWt2y1Yyl_wWTXXptzxgDtPmHeyAK1k-CItw6zfXpnZOD897PS6MDns6jcJA1J3/exec";
const dispositionForm = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(dispositionForm) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("DOMContentLoaded", (event) => {
  const nextBtn = document.querySelector(".nextBtn");
  const backBtn = document.querySelector(".backBtn");
  const formFirst = document.querySelector(".form.first");
  const formSecond = document.querySelector(".form.second");

  nextBtn.addEventListener("click", function (event) {
    event.preventDefault();
    formFirst.style.display = "none";
    formSecond.style.display = "block";
  });

  backBtn.addEventListener("click", function (event) {
    event.preventDefault();
    formFirst.style.display = "block";
    formSecond.style.display = "none";
  });
});
