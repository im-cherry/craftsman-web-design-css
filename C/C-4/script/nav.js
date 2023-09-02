const navListEls = document.querySelectorAll("#aside .nav > ul > li");
navListEls.forEach((el) => {
  el.addEventListener("mouseover", function () {
    this.classList.add("active");
  });
  el.addEventListener("mouseout", function () {
    this.classList.remove("active");
  });
});
