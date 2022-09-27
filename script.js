const shareBtn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share-box");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("open");
  shareBox.classList.toggle("open");
});
