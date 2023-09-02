const noticeContentListEl = document.querySelector(
  "#contents .notice .content ul li"
);
const popuEl = document.querySelector("#popup");
const popupCloseBtnEl = popuEl.querySelector(".close button");

noticeContentListEl.addEventListener("click", function () {
  popuEl.classList.add("active");
});
popupCloseBtnEl.addEventListener("click", function () {
  popuEl.classList.remove("active");
});
