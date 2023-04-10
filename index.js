// ===================================================
// header scroll
window.addEventListener("scroll", function () {
  let value = this.window.scrollY;
  if (value > 50) {
    this.document.querySelector(
      "header"
    ).style = `border-bottom: 1px solid #858f99; background: #4a4e4d`;
  } else {
    this.document.querySelector(
      "header"
    ).style = `border: none; background: transparent`;
  }
});

// ===================================================
// slide show

const bgimg = document.querySelector(".navBanner");
const sildeView = document.querySelector(".sildeView");
for (let i = 1; i <= 3; i++) {
  sildeView.innerHTML += `<img src="./image/banner${i}.jpg" alt="" />`;
}

const Next = document.querySelector(".SlideNext");
const Prev = document.querySelector(".SlidePrev");
const SlideMainWidth = document.querySelector(".banner").offsetWidth;
const img = document.querySelectorAll(".sildeView img");
const quantity = img.length;
let cnt = 0;

Next.addEventListener("click", function () {
  if (cnt < quantity - 1) {
    cnt++;
  } else {
    cnt = 0;
  }
  sildeView.style = `transform: translate(${-SlideMainWidth * cnt}px);`;
  bgimg.style = `background-image: url(../image/banner${cnt + 1}.jpg);`;
});
Prev.addEventListener("click", function () {
  if (cnt <= 1) {
    cnt = quantity;
  } else {
    cnt--;
  }
  sildeView.style = `transform: translate(${
    -SlideMainWidth * cnt + SlideMainWidth
  }px);`;
  bgimg.style = `background-image: url(../image/banner${cnt + 1}.jpg);`;
});
// setInterval(function () {
//   if (cnt < quantity - 1) {
//     cnt++;
//   } else {
//     cnt = 0;
//   }
//   sildeView.style = `transform: translate(${-SlideMainWidth * cnt}px);`;
//   bgimg.style = `background-image: url(../image/banner${cnt + 1}.jpg);`;
// }, 10000);
