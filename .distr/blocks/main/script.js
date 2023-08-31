
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
      setSlideHeight(this);
      mainCounter()
    },
    slideChangeTransitionEnd:function(){
      setSlideHeight(this);
      mainCounter()
    }
  }
});

function setSlideHeight(that){
  $('.swiper-slide').css({height:'auto'});
      var currentSlide = that.activeIndex;
      var newHeight = $(that.slides[currentSlide]).height();



       $('.swiper-slide').animate({ 
        height : newHeight
       })
      that.update();
}















function mainCounter() {
  const couterMainSwiper = document.querySelector('.main__box-counter')
  const couterMainSwiperSecond = document.querySelector('.main__box-counter-second')
  const mainSwiperSlide = $('.swiper-slide-active').attr('aria-label')
  const mainSwiperSlideSecond = $('.swiper-slide-active').attr('aria-label')

  if (mainSwiperSlide.replace(/ .*/,'') === 'NaN') {
    couterMainSwiper.innerHTML = '1'
    couterMainSwiperSecond.innerHTML = ''
    couterMainSwiperSecond.insertAdjacentHTML('beforeend', `1<span>/${mainSwiperSlideSecond.split(" ").pop()}</span>`)
    // 
  } else {
    couterMainSwiper.innerHTML = mainSwiperSlide.replace(/ .*/,'')
    couterMainSwiperSecond.innerHTML = ''
    couterMainSwiperSecond.insertAdjacentHTML('beforeend', `${mainSwiperSlide.replace(/ .*/,'')}<span>/${mainSwiperSlideSecond.split(" ").pop()}</span>`)
  }

  console.log(mainSwiperSlideSecond.split(" ").pop())
}
