alert("고냥이");

const rightArrow = document.querySelector(".right.arrow");
const leftArrow = document.querySelector(".left.arrow");
const lists = document.querySelectorAll("li");

let currentImageindex = 0;

rightArrow.onclick = function () {
  lists[currentImageindex].classList.remove("show");

  currentImageindex = currentImageindex + 1;
  if (currentImageindex === 5) {
    currentImageindex = 0;
  }

  lists[currentImageindex].classList.add("show");
};

leftArrow.onclick = function () {
  lists[currentImageindex].classList.remove("show");

  currentImageindex = currentImageindex - 1;
  if (currentImageindex < 0) {
    currentImageindex = 4;
  }

  lists[currentImageindex].classList.add("show");
};
