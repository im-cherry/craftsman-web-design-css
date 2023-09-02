const tapContentNoticeList = document.querySelector(
  "#tap .tapContent .notice ul li"
);
const popupEl = document.querySelector("#popup");
const popupCloseEl = popupEl.querySelector(".close");

tapContentNoticeList.addEventListener("click", function () {
  popupEl.classList.add("active");
});
popupCloseEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
