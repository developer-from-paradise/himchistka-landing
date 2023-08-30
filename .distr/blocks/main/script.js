
var swiper = new Swiper(".main-swiper", {
  direction: "vertical",
  loop: true,
  slidesPerView: 1,
  autoHeight: true,
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
    },
    slideChangeTransitionEnd:function(){
      setSlideHeight(this);
    }
  }
});

function setSlideHeight(that){
  $('.swiper-slide').css({height:'auto'});
      var currentSlide = that.activeIndex;
      var newHeight = $(that.slides[currentSlide]).height();

      $('.swiper-wrapper,.swiper-slide').css({ height : newHeight })
      that.update();
 }