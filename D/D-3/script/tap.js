const tapMenuListEls = document.querySelectorAll("#tap .tapMenu ul li");
const tapContentListEls = document.querySelectorAll("#tap .tapContent div");
let tapIndex = 0;

tapMenuListEls[tapIndex].classList.add("active");
tapContentListEls[tapIndex].classList.add("active");

tapMenuListEls.forEach((el, index) => {
  el.addEventListener("click", function () {
    tapMenuListEls[tapIndex].classList.remove("active");
    tapContentListEls[tapIndex].classList.remove("active");

    tapMenuListEls[index].classList.add("active");
    tapContentListEls[index].classList.add("active");

    tapIndex = index;
  });
});
