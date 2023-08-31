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
            searchControlProvider: 'yandex#search'
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


