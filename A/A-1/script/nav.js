const navEl = document.querySelector("#header .nav");
const navListEls = document.querySelectorAll("#header .nav > ul > li");

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
