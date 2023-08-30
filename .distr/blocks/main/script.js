$(function () {
    $('.main-slider').slick({
      vertical: true,
      slidesToShow: 1,
      dots: true,
      adaptiveHeight: true,
      nextArrow: '<button type="button" class="slick-next slick-arrow"><svg class="main-btn__ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.86609 2.31831C7.23882 2.00913 7.79998 2.05091 8.11946 2.41162L15.2306 10.4403C15.5159 10.7624 15.5159 11.2378 15.2306 11.5599L8.11946 19.5886C7.79998 19.9493 7.23882 19.9911 6.86609 19.6819C6.49335 19.3727 6.45019 18.8296 6.76967 18.4689L13.2223 11L6.76967 3.53125C6.45019 3.17054 6.49335 2.62749 6.86609 2.31831Z" fill="white"/></svg></button>',
          prevArrow: '<button type="button" class="slick-prev slick-arrow"><svg class="main-btn__ico" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M6.86609 2.31831C7.23882 2.00913 7.79998 2.05091 8.11946 2.41162L15.2306 10.4403C15.5159 10.7624 15.5159 11.2378 15.2306 11.5599L8.11946 19.5886C7.79998 19.9493 7.23882 19.9911 6.86609 19.6819C6.49335 19.3727 6.45019 18.8296 6.76967 18.4689L13.2223 11L6.76967 3.53125C6.45019 3.17054 6.49335 2.62749 6.86609 2.31831Z" fill="white"/></svg></button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            dots: false
          }
        }
      ]
    });
  })