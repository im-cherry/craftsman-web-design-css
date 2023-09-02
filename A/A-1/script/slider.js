const sliderWrapperEl = document.querySelector("#slider .sliderWrapper");
const slideListEls = document.querySelectorAll("#slider ul li");
const slideCount = slideListEls.length;
let slideIndex = 0;

sliderWrapperEl.appendChild(slideListEls[slideIndex].cloneNode(true));

setInterval(() => {
  slideIndex += 1;
  sliderWrapperEl.style.transition = "0.6s";
  sliderWrapperEl.style.transform = `translateY(-${slideIndex * 100}%)`;

  if (slideIndex === slideCount) {
    setTimeout(() => {
      slideIndex = 0;
      sliderWrapperEl.style.transition = "0s";
      sliderWrapperEl.style.transform = `translateY(0)`;
    }, 600);
  }
}, 3000);
