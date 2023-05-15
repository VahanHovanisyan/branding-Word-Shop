// scroll onclick
let elemLinks = document.querySelectorAll('[data-goto]');

if (elemLinks.length > 0) {
	elemLinks.forEach(elemLink => {
		elemLink.addEventListener('click', onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		let target = e.target;
		if (target.dataset.goto && document.querySelector(target.dataset.goto)) {
			let gotoBlock = document.querySelector(target.dataset.goto);
			let gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('.header').offsetHeight;
		
			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}