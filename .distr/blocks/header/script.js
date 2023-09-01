// Dropdown ссылки

if (window.innerWidth > 992 ) {
    // $('.dropdown-btn').hover(function(){
    //     $('.dropdown').css('display', 'flex');
    // }, function(){
    //      $('.dropdown').css('display', 'none');
    // });
    
    // $('.link-cloth').hover(function(){
    //     $('.extra-cloth').css('display', 'flex');
    // }, function(){
    //     $('.extra-cloth').css('display', 'none');
    // });
    
    // $('.link-acce').hover(function(){
    //     $('.extra-acce').css('display', 'flex');
    // }, function(){
    //     $('.extra-acce').css('display', 'none');
    // });
    
    // $('.link-house').hover(function(){
    //     $('.extra-house').css('display', 'flex');
    // }, function(){
    //     $('.extra-house').css('display', 'none');
    // });
    
} else {
    let elements = $('.dropdown__main-link');
    $('.dropdown__extra').each((index, element) => {
        elements[index].after(element);
    });

    




    $('.dropdown-btn-link').click(function(){
        if($('.dropdown:visible').length == 0) {            
            $('.dropdown').css('display', 'flex');
        } else {
            $('.dropdown').css('display', 'none');
        }
    });

    $('.dropdown__main-link').click(function(){
        let dropdown_menu = $(this).next();
        if (dropdown_menu.is(':visible')) {
            dropdown_menu.css('display', 'none');
        } else {
            dropdown_menu.css('display', 'flex');
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

const DESCTOP = 1280

function dropDownGenerate() {
    const dropDownBtnBtn = $('.dropdown-skin-item-text')
    const dropDownListContent = document.querySelector('.dropdown-skin-second')
    const dropDownListList = document.querySelector('.dropdown-skin-item-list')

    dropDownListContent.innerHTML = dropDownListList.innerHTML

    dropDownBtnBtn.click(function() {
        dropDownListContent.innerHTML = $(this).next().html()
    })

}

function dropdown() {
    const dropDownBtn = $('.dropdown-btn-text')
    const dropDownList = $('.dropdown-skin-first')
    const dropDownListBtn = $('.dropdown-skin-item-text')
    const dropDownListList = $('.dropdown-skin-item-list')

    dropDownBtn.click(function(e) {
        dropDownList.toggleClass('active')
    })
    dropDownListBtn.click(function() {
        $(this).next().toggleClass('active')
    })
}

if (window.innerWidth >= DESCTOP) {
    dropDownGenerate()
} else {
    dropdown()
}


$(window).on('resize', function() {
    if (window.innerWidth >= DESCTOP) {
        dropDownGenerate()
    } else {
        dropdown()
    }
})