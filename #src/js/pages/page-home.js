"use strict";
(function (){
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		breakpoints: {
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
			868: {
				slidesPerView: 4,
				spaceBetween: 40,
			},
		},
	});
	if (window.innerWidth <= 768 && swiper && swiper.destroy) {
		swiper.destroy();
	}
	const openSeoText = (btn, block) => {
		const btnEl = document.querySelector(btn);
		btnEl.addEventListener('click', e => {
			const blockEl = document.querySelector(block);
			blockEl.classList.add('active');
			btnEl.classList.add('unactive');
		});
	}
	openSeoText('.bg-grad', '.seo-text > div');
	if (window.innerWidth <= 768) {
		const elemNewsBlock = document.querySelector('.news-block');
		const slider = elemNewsBlock.querySelector('.news-wrapper');
		const sliderWrapper = elemNewsBlock.querySelector('.news-list');
		const sliderItem = elemNewsBlock.querySelectorAll('.news-item');
		const sliderPagination = document.createElement('div');
		slider.classList.add('swiper', 'mySwiperNews');
		sliderWrapper.classList.add('swiper-wrapper');
		sliderWrapper.classList.remove('row');
		sliderItem.forEach(item => {
			item.classList.add('swiper-slide');
		});
		sliderPagination.classList.add('swiper-pagination');
		slider.append(sliderPagination);

		const swiper = new Swiper(".mySwiperNews", {
			spaceBetween: 20,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
		});
	}
})();