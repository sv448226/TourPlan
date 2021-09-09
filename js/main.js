const swiper = new Swiper('.media-swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.media-swiper-button--next',
    prevEl: '.media-swiper-button--prev',
  },
});

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowRight') {
    document.querySelector('.media-swiper-button--next').click();
  } 
  if (event.code == 'ArrowLeft') {
    document.querySelector('.media-swiper-button--prev').click();
  }
});