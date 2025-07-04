$(function () {

	// Добавление тега Span
	$('.logo-litera').each(function () {
		var ths = $(this);
		ths.html(ths.html().replace('O', '<span>O</span>'));
	});

	// Открытие/закрытие поисковой строки
	$('.search').click(function () {
		$('.search-field').stop().slideToggle();
		$('.search-field input[type=text]').focus();
	});

	$(document).keyup(function (e) {
		if (e.keyCode == 27) {
			$('.search-field').slideUp();
		}
	}).click(function () {
		$('.search-field').slideUp();
	});
	$('.search-wrap').click(function (e) {
		e.stopPropagation();
	});

	// Мобильное меню
	$('.top-line').after('<div class="mobile-menu"></div>');
	$('.top-menu').clone().appendTo('.mobile-menu');
	$('.mobile-menu-button').click(function () {
		$('.mobile-menu').stop().slideToggle();
	});

	// Обработка класса Hover
	$('.col-item').hover(
		function () {
			const ths = $(this);
			const lnk = ths.closest('.col-item').find('h4 a');
			lnk.addClass('hover');

			// сохраняем ссылку в DOM-элементе для доступа во втором колбэке
			$(this).data('hover-link', lnk);
		},
		function () {
			const lnk = $(this).data('hover-link');
			if (lnk) lnk.removeClass('hover');
		}
	);


});
