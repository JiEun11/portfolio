"use strict";

// 페이지 아래로 스크롤 시 다크 스타일링 적용
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  console.log(`navbarHeight: ${navbarHeight}`);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// 페이지 아래로 스크롤 시 Home 섹션을 점점 투명해지게
const homeContainer = document.querySelector("#home");
const homeHeight = homeContainer.offsetHeight;
document.addEventListener('scroll', () => {
    homeContainer.style.opacity = 1 - window.scrollY / homeHeight ;
})