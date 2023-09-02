const navEl = document.querySelector("#aside .nav");
const navBgEl = navEl.querySelector(".bg");
const navListEl = navEl.querySelectorAll("ul > li");

navListEl.forEach((el) => {
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
