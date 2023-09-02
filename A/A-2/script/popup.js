const noticeEl = document.querySelector("#contents .notice .content li");
const popupEl = document.querySelector("#popup");
const popupCloseBtnEl = popupEl.querySelector(".close button");

noticeEl.addEventListener("click", function () {
  popupEl.classList.add("active");
});
popupCloseBtnEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
