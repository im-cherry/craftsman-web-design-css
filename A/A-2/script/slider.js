const sliderWrapperEl = document.querySelector("#slider .sliderWrapper");
const sliderListEls = document.querySelectorAll("#slider ul li");
const sliderCount = sliderListEls.length;
let sliderIndex = 0;

sliderWrapperEl.style.width = `${(sliderCount + 1) * 100}%`;
sliderWrapperEl.appendChild(sliderListEls[sliderIndex].cloneNode(true));

setInterval(() => {
  sliderIndex += 1;
  sliderWrapperEl.style.transition = "0.6s";
  sliderWrapperEl.style.marginLeft = `-${sliderIndex * 100}%`;

  if (sliderIndex === sliderCount) {
    setTimeout(() => {
      sliderIndex = 0;
      sliderWrapperEl.style.transition = "0s";
      sliderWrapperEl.style.marginLeft = `0`;
    }, 600);
  }
}, 3000);
