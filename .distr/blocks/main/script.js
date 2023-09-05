
var swiper = new Swiper(".main-swiper", {
  direction: "vertical",
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on:{
    init:function(){
      mainCounter()
    },
    slideChangeTransitionEnd:function(){
      mainCounter()
    }
  }
});











function mainCounter() {
  const couterMainSwiper = document.querySelector('.main__box-counter')
  const couterMainSwiperSecond = document.querySelector('.main__box-counter-second')
  const mainSwiperSlide = $('.swiper-slide-active').attr('aria-label')
  const mainSwiperSlideSecond = $('.swiper-slide-active').attr('aria-label')

  if (mainSwiperSlide.replace(/ .*/,'') === 'NaN') {
    couterMainSwiper.innerHTML = '1'
    couterMainSwiperSecond.innerHTML = ''
    couterMainSwiperSecond.insertAdjacentHTML('beforeend', `1<span>/${mainSwiperSlideSecond.split(" ").pop()}</span>`)
  } else {
    couterMainSwiper.innerHTML = mainSwiperSlide.replace(/ .*/,'')
    couterMainSwiperSecond.innerHTML = ''
    couterMainSwiperSecond.insertAdjacentHTML('beforeend', `${mainSwiperSlide.replace(/ .*/,'')}<span>/${mainSwiperSlideSecond.split(" ").pop()}</span>`)
  }
}
