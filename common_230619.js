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
  //section위 위치 및 넓이 정보를 가져온다.
  let section = entire.querySelector(".home");
  let left = section.getBoundingClientRect().left;
  let top = section.getBoundingClientRect().top;
  let width = section.getBoundingClientRect().width;
  let height = section.getBoundingClientRect().height / 5;
  console.log(currentSection, width);
  console.log(left, top);

  let moveY = currentSection * height;
  let moveX = currentSection * -width;
  entire.style.transform = `translate(${left}px, ${moveY}px)`;
  setTimeout(() => {
    entire.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }, 500);
}

function movePrev(currentSection) {
  let section = entire.querySelector(".home");
  let left = section.getBoundingClientRect().left;
  let top = section.getBoundingClientRect().top;
  let width = section.getBoundingClientRect().width;
  let height = section.getBoundingClientRect().height / 5;

  let moveY = currentSection * height;
  let moveX = currentSection * -width;
  entire.style.transform = `translate(${moveX}px, ${top}px)`;
  setTimeout(() => {
    entire.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }, 500);
}

// const entire = document.querySelector(".entire");
const wrap = document.querySelector(".wrap");

function updateLayout() {
  const currentSection = Math.round(wrap.scrollLeft / window.innerWidth);
  const moveX = currentSection * -window.innerWidth;

  entire.style.transform = `translateX(${moveX}px)`;
}

window.addEventListener("resize", updateLayout);
