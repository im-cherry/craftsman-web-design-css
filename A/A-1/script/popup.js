const noticeContentEl = document.querySelector("#contents .tap .tapContent li");
const popupEl = document.querySelector("#popup");
const popupCloseBtnEl = popupEl.querySelector(".close button");

noticeContentEl.addEventListener("click", () => {
  popupEl.classList.add("active");
});

popupCloseBtnEl.addEventListener("click", () => {
  popupEl.classList.remove("active");
});
