const tapMenuListEls = document.querySelectorAll(
  "#contents .tap .tapMenu ul li"
);
const tapContentEls = document.querySelectorAll(
  "#contents .tap .tapContent div"
);
let tapIndex = 0;

tapMenuListEls[tapIndex].classList.add("active");
tapContentEls[tapIndex].classList.add("active");

tapMenuListEls.forEach((el, index) => {
  el.addEventListener("click", function () {
    tapMenuListEls[tapIndex].classList.remove("active");
    tapContentEls[tapIndex].classList.remove("active");

    tapMenuListEls[index].classList.add("active");
    tapContentEls[index].classList.add("active");

    tapIndex = index;
  });
});
