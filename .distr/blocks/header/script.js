// Dropdown ссылки
$('.dropdown-btn').hover(function(){
    $('.dropdown').css('display', 'flex').hide().slideDown();
}, function(){
     $('.dropdown').slideUp();
});

$('.link-cloth').hover(function(){
    $('.extra-cloth').css('display', 'flex').hide().slideDown();
}, function(){
    $('.extra-cloth').css('display', 'none');
});

$('.link-acce').hover(function(){
    $('.extra-acce').css('display', 'flex').hide().slideDown();
}, function(){
    $('.extra-acce').css('display', 'none');
});

$('.link-house').hover(function(){
    $('.extra-house').css('display', 'flex').hide().slideDown();
}, function(){
    $('.extra-house').css('display', 'none');
});

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