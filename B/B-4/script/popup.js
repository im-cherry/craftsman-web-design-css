const noticeConetntListEl = document.querySelector(
  "#contents .notice .content ul li"
);
const popupEl = document.querySelector("#popup");
const popupCloseBtnEl = popupEl.querySelector(".close");

noticeConetntListEl.addEventListener("click", function () {
  popupEl.classList.add("active");
});

popupCloseBtnEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
