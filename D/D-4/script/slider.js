const sliderEl = document.querySelector("#slider ul");
const sliderListEls = sliderEl.querySelectorAll("li");
const sliderCount = sliderListEls.length;
let sliderIndex = 0;

sliderListEls[sliderIndex].classList.add("active");

setInterval(() => {
  const nextIndex = (sliderIndex + 1) % sliderCount;

  sliderListEls[sliderIndex].classList.remove("active");
  sliderListEls[nextIndex].classList.add("active");

  sliderIndex = nextIndex;
}, 3000);