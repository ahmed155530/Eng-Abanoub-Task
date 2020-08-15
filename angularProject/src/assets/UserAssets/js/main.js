$(function () {
    'use strict';

    var windowHeight = $(window).height,
        upperHeight = $('.upper-bar').innerHeight(),
        navHeight = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(windowHeight - (upperHeight + navHeight));

    // featured works
    $('.featuredWork .buttons button').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        console.log($(this).data('class'));
    });
});

