const tapNoticeContentListEl = document.querySelector(
  "#tap .tapContent .notice ul li"
);
const popupEl = document.querySelector("#popup");
const popupCloseBtnEl = popupEl.querySelector(".close");

tapNoticeContentListEl.addEventListener("click", function () {
  popupEl.classList.add("active");
});

popupCloseBtnEl.addEventListener("click", function () {
  popupEl.classList.remove("active");
});
