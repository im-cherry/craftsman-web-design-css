const navEl = document.querySelector("#header .nav");
const navBgEl = navEl.querySelector(".bg");
const navListEls = navEl.querySelectorAll("ul > li");

navListEls.forEach((el) => {
  el.addEventListener("mouseover", function () {
    navEl.classList.add("active");
    this.classList.add("active");
  });
  el.addEventListener("mouseout", function () {
    navEl.classList.remove("active");
    this.classList.remove("active");
  });
});

navBgEl.addEventListener("mouseover", function () {
  navEl.classList.add("active");
});
navBgEl.addEventListener("mouseout", function () {
  navEl.classList.remove("active");
});
