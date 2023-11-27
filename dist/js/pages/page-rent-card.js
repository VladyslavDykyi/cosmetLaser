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
	const swiperProdNav = new Swiper(".mySwiperFor", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	});
	const swiperProdNFor = new Swiper(".mySwiperNav", {
		spaceBetween: 10,
		grabCursor: true,
		thumbs: {
			swiper: swiperProdNav,
		},
	});
	const swiper = new Swiper(".mySwiper", {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
		breakpoints: {
			480: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			991: {
				slidesPerView: 3,
				spaceBetween: 40,
			},
		},
	});
	const mySwiperGallery = new Swiper(".mySwiperGallery", {
		effect: "coverflow",
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: "auto",
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 150,
			modifier: 1,
			slideShadows: true,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: true,
		},
	});
	if (window.innerWidth <= 768) {
		const mySwiperDescription = new Swiper(".mySwiperDescription", {
			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: "auto",
			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 0,
				modifier: 1,
				slideShadows: true,
			},
		});
	}
	const selectorTel = document.getElementById("formControlInput2");

	const tel = new Inputmask("+38 (099) 999-99-99");
	tel.mask(selectorTel);
	document.addEventListener('DOMContentLoaded', function () {
		const links = document.querySelectorAll('.anchor-item > a');

		for (const link of links) {
			link.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href').substring(1);
				const targetElement = document.getElementById(targetId);
				const headerHeight = document.querySelector('.header-bg').offsetHeight;

				if (targetElement) {

					const targetOffset = targetElement.offsetTop - headerHeight;
					window.scrollTo({
						top: targetOffset,
						behavior: 'smooth',
					});
				}
			});
		}
	});
})();