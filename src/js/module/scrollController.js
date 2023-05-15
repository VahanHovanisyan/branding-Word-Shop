// scroll: lock / unlock

const blockLockScroll = document.body;
export const scrollController = {
	scrollPosition: 0,
	lockScroll() {
		scrollController.scrollPosition = window.scrollY;
		let lockPadding = window.innerWidth - blockLockScroll.offsetWidth;
		blockLockScroll.classList.add('lock-scroll');
		blockLockScroll.style.cssText = `
			top: -${scrollController.scrollPosition}px;
			padding-right: ${lockPadding}px;
		`;
		document.documentElement.style.scrollBehavior = 'unset';
	},

	unLockScroll() {
		blockLockScroll.classList.remove('lock-scroll');
		blockLockScroll.style.cssText = '';
		window.scroll({ top: scrollController.scrollPosition });
		document.documentElement.style.scrollBehavior = '';
	}
};

