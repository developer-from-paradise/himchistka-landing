
const DESKTOP = 1280

function dropDownGenerate() {
    const dropDownBtnBtn = $('.dropdown-skin-item-text')
    const dropDownListContent = document.querySelector('.dropdown-skin-second')
    const dropDownListList = document.querySelector('.dropdown-skin-item-list')

    dropDownListContent.innerHTML = dropDownListList.innerHTML

    dropDownBtnBtn.click(function() {
        dropDownListContent.innerHTML = $(this).next().html()
        if (window.innerWidth >= DESKTOP) {
            $('.dropdown-skin-second').css('display', 'flex')
        }
    })

}

function dropdown() {
    const dropDownBtn = $('.dropdown-btn-text')
    const dropDownList = $('.dropdown-skin')
    const dropDownListBtn = $('.dropdown-skin-item-text')

    dropDownBtn.click(function(e) {
        dropDownList.toggleClass('active')
    })

    if (window.innerWidth <= DESKTOP) {
        dropDownListBtn.next().hasClass('active') ? dropDownListBtn.next().removeClass('active') : null
        $('.nav').hasClass('active') ? $('.nav').removeClass('active') : null


        
    }
    dropDownListBtn.click(function() {
        $(this).next().toggleClass('active')
    })
    $(window).on('resize', function() {
        if (window.innerWidth <= DESKTOP) {
            dropDownListBtn.next().hasClass('active') ? dropDownListBtn.next().removeClass('active') : null
            $('.dropdown-skin-second').css('display', 'none')
            $('.nav').hasClass('active') ? $('.nav').removeClass('active') : null

        }
    })
}

dropdown()
dropDownGenerate()



// Бургер кнопка
$('.header__burger').click(function(){
    if(!$(this).hasClass('active-burger')) {
        $(this).addClass('active-burger');
        $('.nav').addClass('active');
        $('.nav').addClass('animate__slideInLeft');
        $('.header__brand-logo').addClass('active-logo');

        setTimeout(function(){
            $('.nav').removeClass('animate__slideInLeft');
        }, 300);
    } else {
        $(this).removeClass('active-burger');
        $('.nav').addClass('animate__slideOutLeft');
        setTimeout(function(){
            $('.nav').removeClass('animate__slideOutLeft');
            $('.header__brand-logo').removeClass('active-logo');
            $('.nav').removeClass('active');
        }, 300);     
    }
});