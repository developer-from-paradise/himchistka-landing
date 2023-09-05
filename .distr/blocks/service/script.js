var skroll = new Skroll()
			.add(".service__box",{
				animation:"slideInLeft",
				delay:80,
				duration:800
			}).init();


if(window.innerWidth > 1190) {
	$(window).scroll(function() {
		let hT = $('.service__img').offset().top,
			hH = $('.service__img').outerHeight(),
			wH = $(window).height(),
			wS = $(this).scrollTop();

		// Получаем значение свойства 'left' в пикселях
		const leftInPixels = parseFloat($('.service__img').css('left'));

		// Получаем ширину родительского элемента, в предположении, что .service__img находится внутри родительского элемента
		const parentWidth = $('body').width();

		// Переводим значение 'left' из пикселей в проценты
		const leftInPercent = (leftInPixels / parentWidth) * 100;
		
		const minValue = 281.1526479750779;
		const maxValue = 374.61059190031153;
		const valueToConvert = (wS / hH) * 100; // Значение, которое вы хотите преобразовать


		const scrollPercentage = 100 - ((valueToConvert - minValue) / (maxValue - minValue)) * 50;
		console.log(leftInPercent);
		if (leftInPercent > 50) {
			console.log('moremore');

			$('.service__img').css('left', scrollPercentage + '%');

		}
	});
}