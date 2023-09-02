const sliderEl = document.querySelector("#slider ul");
const sliderListEls = document.querySelectorAll("#slider ul li");
const sliderCount = sliderListEls.length;
let sliderIndex = 0;

sliderEl.style.width = `${(sliderCount + 1) * 100}%`;
sliderEl.appendChild(sliderListEls[sliderIndex].cloneNode(true));

setInterval((el) => {
  sliderIndex += 1;
  sliderEl.style.transition = "0.6s";
  sliderEl.style.marginLeft = `-${sliderIndex * 100}%`;

  if (sliderIndex === sliderCount) {
    setTimeout(() => {
      sliderIndex = 0;
      sliderEl.style.transition = "0s";
      sliderEl.style.marginLeft = `0`;
    }, 600);
  }
}, 3000);
