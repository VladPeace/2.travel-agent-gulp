import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

function swiperFunc() {
	const swiper = new Swiper('#swiper-popular', {
		slidesPerView: 1.3,
		spaceBetween: 32,
		loop: true,
		navigation: {
			nextEl: '#popularNext',
			prevEl: '#popularPrev',
		},
		breakpoints: {
			// Определение количества слайдов для различных диапазонов ширины экрана
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3.5,
			},
			768: {
				slidesPerView: 4.1,
			},
			576: {
				slidesPerView: 2.5,
			},
			425: {
				slidesPerView: 1.5,
			},
		},
	});
}

export default swiperFunc;