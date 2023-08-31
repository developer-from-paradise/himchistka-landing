const DESCTOP = 1280

function dropDownGenerate() {
    const dropDownBtnBtn = $('.dropdown-btn-second')
    const dropDownListContent = document.querySelector('.dropdown-list-content')
    const dropDownListList = document.querySelector('.dropdown-list-first .dropdown-list .dropdown-list')

    dropDownListContent.innerHTML = dropDownListList.innerHTML

    dropDownBtnBtn.click(function() {
        console.log()
        dropDownListContent.innerHTML = $(this).children('.dropdown-list').html()
    })

}

function dropdown() {
    const dropDownBtn = $('.dropdown-btn-first')
    const dropDownListFirst = $('.dropdown-list-first')
    const dropDownBtnSec = $('.dropdown-btn-second')

    dropDownBtn.click(function(e) {
        dropDownListFirst.addClass('active')
    })
    dropDownBtnSec.click(function() {
        $(this).children('.dropdown-list').addClass('active')
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