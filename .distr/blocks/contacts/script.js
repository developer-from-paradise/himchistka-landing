// Показать ещё
const show_more_btn = $('#show_more_btn');
const show_more_box = $('#show_more_box');


show_more_btn.click(function(){
    show_more_box.css("display", 'block');
    show_more_btn.css("display", 'none')
});

// Карта

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.281219, 39.717555],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold; border-radius: 60px;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Пункт приёма',
            balloonContent: 'Северный, просп. Космонавтов, 2/2, д 451'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: './img/common/map-point.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
});