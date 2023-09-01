$(function() {
  function dropDownFooter() {
    $('.footer-droplist').click(function() {
      $('.footer-droplist-list').toggleClass('active')
      $(this).toggleClass('active')
    })
    $('.footer-droplist-list a').click(function() {
      $(this).toggleClass('active')
    })
  }
  dropDownFooter()
})