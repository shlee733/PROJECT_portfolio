const entire = document.querySelector(".entire");
const sections = document.querySelectorAll(".sec");

let currentSection = 0;

function moveNext() {
  if (currentSection < sections.length - 1) {
    currentSection++;
    const moveX = currentSection * -100;
    const moveY = currentSection * 20;
    // entire.style.transform = `translate(${moveX}vw, ${moveY}vh)`;
    entire.style.transform = `translateY(${moveY}vh)`;

    setTimeout(() => {
      entire.style.transform = `translate(${moveX}vw, ${moveY}vh)`;
    }, 500);
  }
}

function movePrev() {
  if (currentSection > 0) {
    currentSection--;
    const moveX = currentSection * 100; // 섹션 너비만큼 이동
    const moveY = currentSection * -20; // 섹션 높이만큼 이동
    // entire.style.transform = `translate(${moveX}vw, ${moveY}vh)`;
    entire.style.transform = `translateY(${moveY}vh)`;

    setTimeout(() => {
      entire.style.transform = `translate(${moveX}vw, ${moveY}vh)`;
    }, 500);
  }
}
