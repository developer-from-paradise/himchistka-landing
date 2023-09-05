// Dropdown ссылки

if (window.innerWidth > 992 ) {
    $('.dropdown-btn').hover(function(){
        $('.dropdown-skin').css('display', 'flex');
    }, function(){
         $('.dropdown-skin').css('display', 'none');
        $('.dropdown-skin-second').css('display', 'none');
         $('.dropdown-skin-second').empty();
    });

    $('.dropdown-skin-item-text').click(function(){
        $('.dropdown-skin-second').empty();
        let lists = $(this).next().clone();
        lists.css('display', 'flex');
        $('.dropdown-skin-second').append(lists);
        $('.dropdown-skin-second').css('display', 'flex');
    });
    
} else {

    $('.dropdown-btn-link').click(function(){

        if($('.dropdown-skin:visible').length == 0) { 
            $('.dropdown-skin').css('display', 'flex');
        } else {

            $('.dropdown-skin').css('display', 'none');
        }
    });

    $('.dropdown-skin-item-text').click(function(){
        if ($('.dropdown-skin-second:visible').length == 0) {
            $(this).next().css('display', 'flex');
            
        } else {
            $(this).next().css('display', 'none');
        }
        
    });



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
