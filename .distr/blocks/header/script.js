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
