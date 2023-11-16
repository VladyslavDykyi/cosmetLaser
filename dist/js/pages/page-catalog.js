"use strict";
(function (){

	const bindTabs = (container) => {
		if (typeof container === 'string') {
			container = document.querySelector(container);
		}

		const titles = container.querySelectorAll('.tab-nav-item');
		const contents = container.querySelectorAll('.cards');

		const deactivate = (elements) => {
			for (let i = 0; i < elements.length; i++) {
				const element = elements[i];
				element.classList.remove('active');
			}
		}
		for (let i = 0; i < titles.length; i++) {
			const titleEl = titles[i];
			titleEl.addEventListener('click', () => {
				deactivate(titles);
				deactivate(contents);

				titles[i].classList.add('active');
				contents[i].classList.add('active');
			});
		}
	}
	bindTabs('.wrapper.flex-grow-1');
})();