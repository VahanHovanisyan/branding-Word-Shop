import { scrollController } from './scrollController.js';

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header__menu");
const headerBurger = document.querySelector(".header__burger");
const mediaQuery = window.matchMedia('(min-width: 992px)');

let keys = {
	ESC: "Escape",
}

const getKeyMenuHide = (e) => {
  console.log("keydown:", e.code);
  if (e.code == keys.ESC) {
    menuHide()
    headerBurger.removeEventListener("keydown", getKeyMenuHide)
  }
}

const menuShow = () => {
  headerMenu.inert = false;
  header.classList.toggle("header_active");
  headerMenu.classList.toggle("header__menu_active");
  headerMenu.style.paddingTop = `${header.offsetHeight}px`;
  scrollController.lockScroll();
  headerBurger.addEventListener("keydown", getKeyMenuHide)

  Array.from(wrapper.children).forEach((child) => {
    if (child !== header) {
      child.inert = true;
    }
  });

}

const menuHide = () => {
  headerMenu.inert = true;
  header.classList.remove("header_active");
  headerMenu.classList.remove("header__menu_active");
  setTimeout(() => { headerMenu.style.paddingTop = ``; }, 300);
  scrollController.unLockScroll();

  Array.from(wrapper.children).forEach((child) => {
    if (child !== header) {
      child.inert = false;
    }
  });
}

headerBurger.addEventListener("click", (event) => {
  if (headerBurger.classList.contains("header__burger")) {
    menuShow();
  }
  if (headerBurger.classList.contains("header__burger") && !headerBurger.classList.contains("burger_open")) {
    menuHide();
  }
});


function handleTabletChange(e) {
  if (e.matches) {
    headerMenu.inert = false;
    headerMenu.style.paddingTop = null;
    header.classList.remove("header_active");
    headerBurger.classList.remove("burger_open");
    scrollController.unLockScroll();
  } else {
    headerMenu.inert = true;
  }
};
mediaQuery.addEventListener("change", handleTabletChange);
