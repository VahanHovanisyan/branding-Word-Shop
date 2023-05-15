import { scrollController } from './scrollController.js';

// import { isMobile } from './isMobile.js';

// if (isMobile.any()) {
// 	document.body.classList.add('mobile');
// } else {
// 	document.body.classList.add('pc');
// }

const wrapper = document.querySelector(".wrapper");
const header = document.querySelector(".header");
// const main = document.querySelector(".main");
// const footer = document.querySelector(".footer");
const headerMenu = document.querySelector(".header__menu");
const burger = document.querySelector(".burger");
const mediaQuery = window.matchMedia('(min-width: 992px)');

let keys = {
	ESC: "Escape",
}

headerMenu.inert = true;

const getKeyMenuHide = (e) => {
	console.log("keydown:", e.code);
	if (e.code == keys.ESC) {
		menuHide()
		burger.removeEventListener("keydown", getKeyMenuHide)
	}
}

const menuShow = () => {
	burger.classList.toggle("burger_open");
	headerMenu.inert = false;
	header.classList.toggle("header_active");
	headerMenu.classList.toggle("header__menu_active");
	headerMenu.style.paddingTop = `${header.offsetHeight}px`;
	scrollController.lockScroll();
	burger.addEventListener("keydown", getKeyMenuHide)

	Array.from(wrapper.children).forEach((child) => {
		if (child !== header) {
			child.inert = true;
		}
	});

}

const menuHide = () => {
	burger.classList.remove("burger_open");
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

document.addEventListener("click", (event) => {
	if (event.target.closest(".burger")) {
		menuShow();
	}
	if (!burger.classList.contains("burger_open")) {
		menuHide();
	}
});


function handleTabletChange(e) {
	if (e.matches) {
		headerMenu.style.paddingTop = null;
		header.classList.remove("header_active");
		burger.classList.remove("burger_open");
		scrollController.unLockScroll();
	}
};
mediaQuery.addEventListener("change", handleTabletChange);

