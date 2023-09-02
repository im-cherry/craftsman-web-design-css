const noticeContentListEl = document.querySelector(
  "#contents .notice .content ul li"
);
const popupEl = document.querySelector("#popup");
const popupCloseBtnEl = popupEl.querySelector(".close button");

noticeContentListEl.addEventListener("click", function () {
  popupEl.classList.add("active");
});

popupCloseBtnEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
