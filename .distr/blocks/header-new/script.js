
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
    const dropDownList = $('.dropdown-skin')
    const dropDownListBtn = $('.dropdown-skin-item-text')

    dropDownBtn.click(function(e) {
        dropDownList.toggleClass('active')
    })

    if (window.innerWidth <= DESCTOP) {
        dropDownListBtn.next().hasClass('active') ? dropDownListBtn.next().removeClass('active') : null
    } 
    dropDownListBtn.click(function() {
        $(this).next().toggleClass('active')
    })
    $(window).on('resize', function() {
        if (window.innerWidth <= DESCTOP) {
         dropDownListBtn.next().hasClass('active') ? dropDownListBtn.next().removeClass('active') : null
        }
    })
}

dropdown()
dropDownGenerate()