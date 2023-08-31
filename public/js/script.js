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



//   function createCircle_2() {
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
//   } 
  
// setInterval(createCircle_2, 50);
  

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
// // Показать ещё
// const show_more_btn = $('#show_more_btn');
// const show_more_box = $('#show_more_box');


// show_more_btn.click(function(){
//     show_more_box.css("display", 'block');
//     show_more_btn.css("display", 'none')
// });

// // // Карта

// ymaps.ready(function () {
//     var myMap = new ymaps.Map('map', {
//             center: [47.281219, 39.717555],
//             zoom: 17,
//             controls: []
//         }, {
//             searchControlProvider: 'yandex#search'
//         }),

//         // Создаём макет содержимого.
//         MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
//             '<div style="color: #FFFFFF; font-weight: bold; border-radius: 60px;">$[properties.iconContent]</div>'
//         ),

//         myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
//             hintContent: 'Пункт приёма',
//             balloonContent: 'Северный, просп. Космонавтов, 2/2, д 451'
//         }, {
//             // Опции.
//             // Необходимо указать данный тип макета.
//             iconLayout: 'default#image',
//             // Своё изображение иконки метки.
//             iconImageHref: './img/common/map-point.png',
//             // Размеры метки.
//             iconImageSize: [32, 32],
//             // Смещение левого верхнего угла иконки относительно
//             // её "ножки" (точки привязки).
//             iconImageOffset: [-5, -38]
//         });

//     myMap.geoObjects
//         .add(myPlacemark);
// });

ymaps.ready(init);

function init () {
    var myMap = new ymaps.Map('map', {
            center: [47.281219, 39.717555],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),
        objectManager = new ymaps.ObjectManager({
            // Чтобы метки начали кластеризоваться, выставляем опцию.
            clusterize: true,
            // ObjectManager принимает те же опции, что и кластеризатор.
            gridSize: 32,
            clusterDisableClickZoom: true
        });

    // Чтобы задать опции одиночным объектам и кластерам,
    // обратимся к дочерним коллекциям ObjectManager.
    objectManager.objects.options.set('preset', 'islands#greenDotIcon');
    objectManager.clusters.options.set('preset', 'islands#greenClusterIcons');
    myMap.geoObjects.add(objectManager);

    $.ajax({
        url: "files/data.json"
    }).done(function(data) {
        objectManager.add(data);
    });

}
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