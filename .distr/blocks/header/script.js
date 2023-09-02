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