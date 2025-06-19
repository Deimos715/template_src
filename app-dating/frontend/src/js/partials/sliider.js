import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

$(document).ready(function(){
    $('.second-section__cards-box-mobile').slick({
        centerMode: true,
        // centerPadding: '60px',
        slidesToShow: 1,
        arrows: true,
        prevArrow: $('.custom-prev'),
        nextArrow: $('.custom-next')
    });
});