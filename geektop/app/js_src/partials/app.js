$(function () {

    $('.logo-litera').each(function () {
        var ths = $(this);
        ths.html(ths.html().replace('O', '<span>O</span>'));
    });

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

});
