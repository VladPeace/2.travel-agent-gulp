// Scroll Reveal
import ScrollReveal from 'scrollreveal';

// Базовые настройки 
ScrollReveal({
	distance: '60px',
	duration: 2000,
});

function scrollRevealFunc() {
	ScrollReveal().reveal('.partners', {
		origin: 'bottom',
	});

	ScrollReveal().reveal('.header, .discover__text, .discover__form', {
		origin: 'top',
	});

	ScrollReveal().reveal('.discover__picture', {
		origin: 'right',
	});

	ScrollReveal().reveal('.discover__picture-scroll', {
		scale: '3',
	});
}

export default scrollRevealFunc;