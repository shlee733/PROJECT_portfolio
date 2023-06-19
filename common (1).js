const entire = document.querySelector(".entire");
const sections = entire.querySelectorAll(".sec");

// let currentSection = 0;
let btnRight = document.querySelectorAll(".btn_right");
btnRight.forEach((el) => {
  el.addEventListener("click", (e) => {
    //클릭한 요소의 data-num을 가져온다.
    let currentSection = e.target.dataset.num;
    // console.log(currentSection);
    moveNext(currentSection);
  });
});

let btnLeft = document.querySelectorAll(".btn_left");
btnLeft.forEach((el) => {
  el.addEventListener("click", (e) => {
    let currentSection = e.target.dataset.num;
    movePrev(currentSection);
  });
});

function moveNext(currentSection) {
  entire.style.transform = `translate(${-(currentSection-1)*100}vw, ${currentSection * 20}vh)`;
  setTimeout(() => {
    entire.style.transform = `translate(${-currentSection*100}vw, ${currentSection * 20}vh)`;
  }, 500);
}

function movePrev(currentSection) {
  entire.style.transform = `translate(${-(currentSection)*100}vw, ${(currentSection) * 20 + 20}vh)`;
  setTimeout(() => {
    entire.style.transform = `translate(${-(currentSection)*100}vw, ${currentSection * 20}vh)`;
  }, 500);
}



let swiper = new Swiper(".slide1", {
  direction: "vertical",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});