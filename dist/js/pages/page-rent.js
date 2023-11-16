"use strict";
(function (){
	const openSeoText = (btn, block) => {
		const btnEl = document.querySelector(btn);
		btnEl.addEventListener('click', e => {
			const blockEl = document.querySelector(block);
			blockEl.classList.add('active');
			btnEl.classList.add('unactive');
		});
	}
	openSeoText('.bg-grad', '.seo-text > div');
})();