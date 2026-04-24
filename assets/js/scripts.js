/*
* ----------------------------------------------------------------------------------------
Author       : themepoke
Template Name: NASTRO - Onepage Business Template
Version      : 1.0
* ----------------------------------------------------------------------------------------
*/
(function($) {
    'use strict';

    jQuery(document).ready(function() {

        /*START PRELOADED*/
        $(window).on('load', function() {
            $('.preloader').fadeOut();
            $('.preloader-area').delay(350).fadeOut('slow');
        });
        /*END PRELOADED*/

        /*START MAGNIFICENT POPUP JS*/
        $('.work-popup').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        /*END MAGNIFICENT POPUP JS*/

        /*COUNTER UP JS*/
        $(".counter-number").counterUp({
            time: 2000,
            delay: 10
        });
        /*COUNTER UP JS*/

        /*START WORK JS*/
        $('.work-inner').mixItUp();
        /*END WORK JS*/

        /*START MENU HIDE*/
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU HIDE*/

        /*START BOOTSTRAP SCROLL-SPY*/
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        /*END BOOTSTRAP SCROLL-SPY*/

        /*START CHANGE MENU BACKGROUND JS*/
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*END CHANGE MENU BACKGROUND JS*/

        /*START SMOOTH SCROLL JS*/
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
        /*END SMOOTH SCROLL JS*/

        /*START TEAM TILT JS*/
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            $('.js-team-tilt').each(function() {
                var $shell = $(this);
                var $card = $shell.find('.single-team');

                $shell.on('mousemove', function(e) {
                    var rect = this.getBoundingClientRect();
                    var percentX = (e.clientX - rect.left) / rect.width;
                    var percentY = (e.clientY - rect.top) / rect.height;
                    var rotateY = (percentX - 0.5) * 18;
                    var rotateX = (0.5 - percentY) * 14;

                    $card
                        .addClass('is-tilting')
                        .css('--team-rotate-x', rotateX.toFixed(2) + 'deg')
                        .css('--team-rotate-y', rotateY.toFixed(2) + 'deg')
                        .css('--team-glow-x', (percentX * 100).toFixed(2) + '%')
                        .css('--team-glow-y', (percentY * 100).toFixed(2) + '%');
                });

                $shell.on('mouseleave', function() {
                    $card
                        .removeClass('is-tilting')
                        .css('--team-rotate-x', '0deg')
                        .css('--team-rotate-y', '0deg')
                        .css('--team-glow-x', '50%')
                        .css('--team-glow-y', '16%');
                });
            });
        }
        /*END TEAM TILT JS*/

        /*START SCROLL TO UP*/
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });
        $('.scrollup').on("click", function() {
            $("html, body").animate({
                scrollTop: 0
            }, 800);
            return false;
        });
        /*END SCROLL TO UP*/

    });

})(jQuery);
