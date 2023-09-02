const tapContentNoticeList = document.querySelector(
  "#contents .tap .content .notice ul li"
);
const popupEl = document.querySelector("#popup");
const popupCloseBtnEl = popupEl.querySelector(".close");

tapContentNoticeList.addEventListener("click", function () {
  popupEl.classList.add("active");
});
popupCloseBtnEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
