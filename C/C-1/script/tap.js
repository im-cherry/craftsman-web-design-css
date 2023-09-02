const tapMenuLists = document.querySelectorAll("#contents .tap .menu ul li");
const tapContentLists = document.querySelectorAll(
  "#contents .tap .content div"
);
let tapIndex = 0;

tapMenuLists[tapIndex].classList.add("active");
tapContentLists[tapIndex].classList.add("active");

tapMenuLists.forEach((el, index) => {
  el.addEventListener("click", function () {
    tapMenuLists[tapIndex].classList.remove("active");
    tapContentLists[tapIndex].classList.remove("active");

    tapMenuLists[index].classList.add("active");
    tapContentLists[index].classList.add("active");

    tapIndex = index;
  });
});
