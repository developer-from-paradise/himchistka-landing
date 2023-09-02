// Dropdown ссылки

if (window.innerWidth > 992 ) {
    $('.dropdown-btn').hover(function(){
        $('.dropdown-skin').css('display', 'flex');
    }, function(){
         $('.dropdown-skin').css('display', 'none');
    });

    $('.dropdown-skin-item-text').hover(function(){
        let lists = $(this).next().clone();
        lists.css('display', 'flex');
        $('.dropdown-skin-second').append(lists);
        $('.dropdown-skin-second').css('display', 'flex');
    }, function(){
        $('.dropdown-skin-second').css('display', 'none');
        $('.dropdown-skin-second').empty();
    });
    
} else {

    $('.dropdown-btn').click(function(){
        alert(123); 

        if($('.dropdown-skin:visible').length == 0) { 
            $('.dropdown-skin').css('display', 'flex');
        } else {
            alert(12333); 
            $('.dropdown-skin').css('display', 'none');
        }
    });

    // $('.dropdown__main-link').click(function(){
    //     let dropdown_menu = $(this).next();
    //     if (dropdown_menu.is(':visible')) {
    //         dropdown_menu.css('display', 'none');
    //     } else {
    //         dropdown_menu.css('display', 'flex');
    //     }
    // });



}

// Бургер кнопка
$('.header__burger').click(function(){
    if(!$(this).hasClass('active-burger')) {
        $(this).addClass('active-burger');
        $('.header__navbar').addClass('mobile-navbar');
        $('.header__navbar').addClass('animate__slideInLeft');
        $('.header__brand-logo').addClass('active-logo');

        setTimeout(function(){
            $('.header__navbar').removeClass('animate__slideInLeft');
        }, 300);
    } else {
        $(this).removeClass('active-burger');
        $('.header__navbar').addClass('animate__slideOutLeft');
        setTimeout(function(){
            $('.header__navbar').removeClass('animate__slideOutLeft');
            $('.header__navbar').removeClass('mobile-navbar');
            $('.header__brand-logo').removeClass('active-logo');
        }, 300);
        
        
    }
});

// const DESKTOP = 1280

// function dropDownGenerate() {
//     const dropDownBtnBtn = $('.dropdown-skin-item-text')
//     const dropDownListContent = document.querySelector('.dropdown-skin-second')
//     const dropDownListList = document.querySelector('.dropdown-skin-item-list')

//     dropDownListContent.innerHTML = dropDownListList.innerHTML

//     dropDownBtnBtn.click(function() {
//         dropDownListContent.innerHTML = $(this).next().html()
//     })

// }

// function dropdown() {
//     const dropDownBtn = $('.dropdown-btn-text');
//     const dropDownList = $('.dropdown-skin-first');
//     const dropDownListSecond = $('.dropdown-skin-first');
//     const dropDownListBtn = $('.dropdown-skin-item-text');
//     const dropDownListList = $('.dropdown-skin-item-list');

//     dropDownBtn.click(function(e) {
//         alert(123);
//         dropDownList.css('display', 'flex');
//         dropDownListSecond.css('display', 'flex');
//     })
//     dropDownListBtn.click(function() {
//         $(this).next().toggleClass('active')
//     })
// }

// if (window.innerWidth >= DESKTOP) {
//     dropDownGenerate()
// } else {
//     dropdown()
// }


// $(window).on('resize', function() {
//     if (window.innerWidth >= DESCTOP) {
//         dropDownGenerate()
//     } else {
//         dropdown()
//     }
// })
// function createCircle_1() {
//     let section = document.querySelector(".bubble-container-1");
//     let circleEl = document.createElement("span");
//     let size = Math.random() * 60;
//     let duration = Math.random() * 10;
  
//     // Максимальная допустимая позиция пузыря по горизонтали
//     let maxLeft = window.innerWidth - 100 - size;
  
//     // Вычисляем случайное положение пузыря, учитывая максимальную допустимую позицию
//     let leftPosition = Math.random() * maxLeft;
  
//     circleEl.style.width = 20 + size + "px";
//     circleEl.style.height = 20 + size + "px";
    
//     // Устанавливаем leftPosition в пределах максимальной допустимой позиции
//     circleEl.style.left = Math.min(Math.max(0, leftPosition), maxLeft) + "px";
    
//     section.appendChild(circleEl);
  
//     setTimeout(() => {
//       circleEl.remove();
//     }, 4000);
//   }

//   setInterval(createCircle_1, 50);



// function createCircle_2() {
//     let section = document.querySelector(".bubble-container-2");
//     let circleEl = document.createElement("span");
//     let size = Math.random() * 60;
//     let duration = Math.random() * 10;
  
//     // Максимальная допустимая позиция пузыря по горизонтали
//     let maxLeft = window.innerWidth - 100 - size;
  
//     // Вычисляем случайное положение пузыря, учитывая максимальную допустимую позицию
//     let leftPosition = Math.random() * maxLeft;
  
//     circleEl.style.width = 20 + size + "px";
//     circleEl.style.height = 20 + size + "px";
    
//     // Устанавливаем leftPosition в пределах максимальной допустимой позиции
//     circleEl.style.left = Math.min(Math.max(0, leftPosition), maxLeft) + "px";
    
//     section.appendChild(circleEl);
  
//     setTimeout(() => {
//       circleEl.remove();
//     }, 4000);
//  } 
  
// setInterval(createCircle_2, 50);


$('[href="#form-section"]').click(function(){
    $('html, body').animate({ scrollTop: $('#form-section').offset().top }, 'slow');
});

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



       $('.swiper-wrapper,.swiper-slide').animate({ 
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
  } else {
    couterMainSwiper.innerHTML = mainSwiperSlide.replace(/ .*/,'')
    couterMainSwiperSecond.innerHTML = ''
    couterMainSwiperSecond.insertAdjacentHTML('beforeend', `${mainSwiperSlide.replace(/ .*/,'')}<span>/${mainSwiperSlideSecond.split(" ").pop()}</span>`)
  }
}

var skroll = new Skroll()
			.add(".about__img",{
				animation:"slideInLeft",
				delay:80,
				duration:800
			})
            .add(".about__info-text",{
				animation:"slideInRight",
				delay:80,
				duration:800
			})
            
            
            .init();
// Показать ещё
const show_more_btn = $('#show_more_btn');
const show_more_box = $('#show_more_box');


show_more_btn.click(function(){
    show_more_box.css("display", 'block');
    show_more_btn.css("display", 'none')
});

// // Карта

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.219857, 39.712613],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search',
            suppressMapOpenBlock: true
        }),

        // Создаём макет содержимого.
        customBalloonLayout = ymaps.templateLayoutFactory.createClass(
            `<div class="custom-balloon">
                <div class="custom-balloon-title">$[properties.balloonHeader]</div>
                <div class="custom-balloon-phone">$[properties.balloonPhone]</div>
                <div class="custom-balloon-address">$[properties.balloonAddress]</div>
                <div class="custom-balloon-schedule">$[properties.balloonSchedule]</div>
                <svg class="custom-balloon-tail" xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 40 16" fill="none">
                    <path d="M20 16L40 0L-2.41593e-06 -3.49691e-06L20 16Z" fill="white"/>
                </svg>
            </div>`
        );

        var FirstPlaceMark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Сана Центральный офис',
            balloonHeader: 'Сана Центральный офис',
            balloonPhone: '8 (800) 123-00-01',
            balloonAddress: 'БЦ Купеческий Двор, Социалистическая ул., 74,  6 этаж, каб. 605А',
            balloonSchedule: '<span class="emphasized">Пн-Вс</span> круглосуточно'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/common/map-point.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            balloonLayout: customBalloonLayout,
            balloonShadow: false,
            balloonAutoPan: false,
            autoClose: false,
            // Балун будем открывать и закрывать кликом по иконке метки.
            hideIconOnBalloonOpen: false
        });



        var SecondPlaceMark = new ymaps.Placemark([47.230719, 39.610679], {
            hintContent: 'Сана Экспресс',
            balloonHeader: 'Сана Экспресс',
            balloonPhone: '8 (800) 123-00-02',
            balloonAddress: 'ТЦ Золотой Вавилон, ул. Малиновского, 25, цокольноый этаж, слева от главного входа.',
            balloonSchedule: '<span class="emphasized">Пн-Вс</span> с 9:00 - 21:00<br><span class="emphasized">Сб-Вс</span> с 10:00 - 19:00<br>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/common/map-point.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            balloonLayout: customBalloonLayout,
            balloonShadow: false,
            balloonAutoPan: false,
            autoClose: false,
            // Балун будем открывать и закрывать кликом по иконке метки.
            hideIconOnBalloonOpen: false
        });


        var ThirdPlaceMark = new ymaps.Placemark([47.281219, 39.717555], {
            hintContent: 'Пункт приёма',
            balloonHeader: 'Пункт приёма',
            balloonPhone: '8 (800) 123-00-04',
            balloonAddress: 'Северный, просп. Космонавтов, 2/2, д 451',
            balloonSchedule: '<span class="emphasized">Пн-Вс</span> с 9:00 - 22:00<br><span class="emphasized">Сб-Вс</span> с выходной<br>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/common/map-point.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            balloonLayout: customBalloonLayout,
            balloonShadow: false,
            balloonAutoPan: false,
            autoClose: false,
            // Балун будем открывать и закрывать кликом по иконке метки.
            hideIconOnBalloonOpen: false
        });


        var FourthPlaceMark = new ymaps.Placemark([47.284990, 39.705589], {
            hintContent: 'Пункт приёма',
            balloonHeader: 'Пункт приёма',
            balloonPhone: '8 (800) 123-00-03',
            balloonAddress: 'Тестовая улица, города Ростов',
            balloonSchedule: '<span class="emphasized">Пн-Вс</span> с 9:00 - 22:00<br><span class="emphasized">Сб-Вс</span> с 10:00 - 18:00<br>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/common/map-point.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            balloonLayout: customBalloonLayout,
            balloonShadow: false,
            balloonAutoPan: false,
            autoClose: false,
            // Балун будем открывать и закрывать кликом по иконке метки.
            hideIconOnBalloonOpen: false
        });


        var FifthPlaceMark = new ymaps.Placemark([55.755864, 37.617698], {
            hintContent: 'Пункт приёма',
            balloonHeader: 'Пункт приёма',
            balloonPhone: '8 (800) 123-00-05',
            balloonAddress: 'Тестовая улица Москвы',
            balloonSchedule: '<span class="emphasized">Пн-Вс</span> с 9:00 - 22:00<br><span class="emphasized">Сб-Вс</span> с 10:00 - 18:00<br>'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/common/map-point.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            balloonLayout: customBalloonLayout,
            balloonShadow: false,
            balloonAutoPan: false,
            autoClose: false,
            // Балун будем открывать и закрывать кликом по иконке метки.
            hideIconOnBalloonOpen: false
        });


    myMap.geoObjects
        .add(FirstPlaceMark)
        .add(SecondPlaceMark)
        .add(ThirdPlaceMark)
        .add(FourthPlaceMark)
        .add(FifthPlaceMark);
    
    FirstPlaceMark.balloon.open();




    $('#first_point').click(function(){
        myMap.setCenter([47.219857, 39.712613]);
        FirstPlaceMark.balloon.open();
        if(!$(this).hasClass("active-point")){
            $('.active-point').removeClass('active-point');
            $(this).addClass("active-point");
        }
    });

    $('#second_point').click(function(){
        myMap.setCenter([47.230719, 39.610679]);
        SecondPlaceMark.balloon.open();
        if(!$(this).hasClass("active-point")){
            $('.active-point').removeClass('active-point');
            $(this).addClass("active-point");
        }
    });

    $('#third_point').click(function(){
        myMap.setCenter([47.281219, 39.717555]);
        ThirdPlaceMark.balloon.open();
        if(!$(this).hasClass("active-point")){
            $('.active-point').removeClass('active-point');
            $(this).addClass("active-point");
        }
    });

    $('#fourth_point').click(function(){
        myMap.setCenter([47.284990, 39.705589]);
        FourthPlaceMark.balloon.open();
        if(!$(this).hasClass("active-point")){
            $('.active-point').removeClass('active-point');
            $(this).addClass("active-point");
        }
    });

    $('#fifth_point').click(function(){
        myMap.setCenter([55.755864, 37.617698]);
        FifthPlaceMark.balloon.open();
        if(!$(this).hasClass("active-point")){
            $('.active-point').removeClass('active-point');
            $(this).addClass("active-point");
        }
    });

});



var skroll = new Skroll()
			.add(".service__box",{
				animation:"slideInLeft",
				delay:80,
				duration:800
			})
      .add(".service__img",{
				animation:"slideInRight",
				delay:80,
				duration:800
			}).init();
//=require form-fancybox/script.js
$(function() {
    function dropDownFooter() {
      $('.footer-droplist').click(function() {
        $('.footer-droplist-list').toggleClass('active')
        $(this).toggleClass('active')
      })
      $('.footer-droplist-list a').click(function() {
        $(this).toggleClass('active')
      })
    }
    dropDownFooter()
  })