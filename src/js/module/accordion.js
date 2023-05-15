// // accordion
// const accordionController = (accordionElem,speed) => {
// 	const accordion = document.querySelector(accordionElem);
// 	accordion.addEventListener('click', function (event) {
// 		const click = event.target;
// 		const accordionBtns = accordion.querySelectorAll('.accordion-btn');
// 		const accordionContent = accordion.querySelectorAll('.accordion-content');
// 		const accordionBox = accordion.querySelectorAll(".accordion-box")
// 		if (click.closest('.accordion-btn')) {
// 			const content = click.closest('.accordion-btn').nextElementSibling;
// 			const accordionBtn = click.closest('.accordion-btn');
// 			const box = click.closest('.accordion-btn').parentElement;
// 			if (content.style.maxHeight || accordionBtn.closest(".active") || box.closest(".active")) {
// 				box.classList.remove('active');
// 				accordionBtn.classList.remove('active');
// 				content.style.maxHeight = null;

// 			} else {
// 				if (accordion.closest('.turn')) {
// 					accordionBox.forEach((el) => {
// 						el.classList.remove('active')
// 					});
// 					accordionBtns.forEach((el) => {
// 						el.classList.remove('active')
// 					});
// 					accordionContent.forEach((el) => {
// 						el.style.maxHeight = null
// 					});
// 				}
// 				setTimeout(() => {
// 					content.style.maxHeight = "100vh"
// 				}, speed);
// 				content.style.maxHeight = content.scrollHeight + 'px';
// 				accordionBtn.classList.add('active');
// 				box.classList.add('active');
// 			}
// 		}
// 		event.preventDefault();
// 	});
// };
// accordionController('.accordion', 300);


// class Accordion {
// 	constructor(target, config) {
// 		this._el = typeof target === 'string' ? document.querySelector(target) : target;
// 		const defaultConfig = {
// 			alwaysOpen: true,
// 			duration: 350
// 		};
// 		this._config = Object.assign(defaultConfig, config);
// 		this.addEventListener();
// 	}
// 	addEventListener() {
// 		this._el.addEventListener('click', (e) => {
// 			const accordionBtn = e.target.closest('.accordion-btn');
// 			if (!accordionBtn) {
// 				return;
// 			}
// 			if (!this._config.alwaysOpen) {
// 				const accordionOpen = this._el.querySelector('.accordion__item_show');
// 				if (accordionOpen) {
// 					accordionOpen !== accordionBtn.parentElement ? this.toggle(accordionOpen) : null;
// 				}
// 			}
// 			this.toggle(accordionBtn.parentElement);
// 		});
// 	}
// 	show(el) {
// 		const elBody = el.querySelector('.accordion-content');
// 		if (elBody.classList.contains('collapsing') || el.classList.contains('accordion__item_show')) {
// 			return;
// 		}
// 		elBody.style.display = 'block';
// 		const height = elBody.offsetHeight;
// 		elBody.style.height = 0;
// 		elBody.style.overflow = 'hidden';
// 		elBody.style.transition = `height ${350}ms ease`;
// 		elBody.classList.add('collapsing');
// 		el.classList.add('accordion__item_slidedown');
// 		elBody.offsetHeight;
// 		elBody.style.height = `${height}px`;
// 		window.setTimeout(() => {
// 			elBody.classList.remove('collapsing');
// 			el.classList.remove('accordion__item_slidedown');
// 			elBody.classList.add('collapse');
// 			el.classList.add('accordion__item_show');
// 			elBody.style.display = '';
// 			elBody.style.height = '';
// 			elBody.style.transition = '';
// 			elBody.style.overflow = '';
// 		}, 350);
// 	}
// 	hide(el) {
// 		const elBody = el.querySelector('.accordion-content');
// 		if (elBody.classList.contains('collapsing') || !el.classList.contains('accordion__item_show')) {
// 			return;
// 		}
// 		elBody.style.height = `${elBody.offsetHeight}px`;
// 		elBody.offsetHeight;
// 		elBody.style.display = 'block';
// 		elBody.style.height = 0;
// 		elBody.style.overflow = 'hidden';
// 		elBody.style.transition = `height ${350}ms ease`;
// 		elBody.classList.remove('collapse');
// 		el.classList.remove('accordion__item_show');
// 		elBody.classList.add('collapsing');
// 		window.setTimeout(() => {
// 			elBody.classList.remove('collapsing');
// 			elBody.classList.add('collapse');
// 			elBody.style.display = '';
// 			elBody.style.height = '';
// 			elBody.style.transition = '';
// 			elBody.style.overflow = '';
// 		}, 350);
// 	}
// 	toggle(el) {
// 		el.classList.contains('accordion__item_show') ? this.hide(el) : this.show(el);
// 	}
// }


// new Accordion(document.querySelector('.accordion'), {
// 	alwaysOpen: true
//   });