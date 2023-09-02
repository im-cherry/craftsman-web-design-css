const navListEl = document.querySelectorAll("#aside .nav > ul > li");
navListEl.forEach((el) => {
  el.addEventListener("mouseover", function () {
    this.classList.add("active");
  });
  el.addEventListener("mouseout", function () {
    this.classList.remove("active");
  });
});
