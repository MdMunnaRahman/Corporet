
// TYPED JS START
var typed = new Typed('#typed', {
  strings: ['MD MOSIUR RAHMAN MUNNA', 'WEB DESIGENAR'],
  typeSpeed: 50,
});
// TYPED JS END

// SWPER JS START
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
//  SWPER JS END

// ASO CSS
AOS.init();


// COUNTER JS
const counterUp = window.counterUp.default

const callback = entries => {
	entries.forEach( entry => {
		const el = entry.target
		if ( entry.isIntersecting && ! el.classList.contains( 'is-visible' ) ) {
			counterUp( el, {
				duration: 2000,
				delay: 16,
			} )
			el.classList.add( 'is-visible' )
		}
	} )
}

const IO = new IntersectionObserver( callback, { threshold: 1 } )

const el = document.querySelector( '.counter' )
IO.observe( el )