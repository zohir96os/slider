//Hundel slider
let rangeSlider = document.querySelector("input[type='range']");
let price = document.querySelector(".plan span");

rangeSlider.addEventListener("change", (e) => {
  var value = e.target.value;
  price.innerHTML = value;
});

//Hundle discount
let btnSwitch = document.querySelector(".switch");
let toggle = document.querySelector(".switch span");
btnSwitch.addEventListener("click", (e) => {
  toggle.classList.toggle("switched");
  if (toggle.classList.contains("switched")) {
    price.innerHTML = price.innerHTML * 0.25;
  }
});
