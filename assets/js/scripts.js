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

        /*START TESTMONIAL JS*/
        $(".testimonial-list").owlCarousel({
            items: 1,
            autoPlay: true,
            navigation: false,
            theme: "tp-round-button",
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: true,
        });
        /*END TESTMONIAL JS*/

        /*COUNTER UP JS*/
        $(".counter-number").counterUp({
            time: 2000,
            delay: 10
        });
        /*COUNTER UP JS*/

        /*START BRANDS CAROUSEL JS*/
        $(".brand-logo-carousel").owlCarousel({
            items: 4,
            autoPlay: true,
            navigation: false,
            pagination: true,
            stopOnHover: true,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [980, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: false,
            itemsMobile: [479, 1]
        });
        /*END BRANDS CAROUSEL JS*/

        /*START MENU HIDE*/
        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
        /*END MENU HIDE*/

        /*START BOOTSTRAP SCROLL-SPY*/
        if ($('a.smoth-scroll[href^="#"]').length) {
            $('body').scrollspy({
                target: '.navbar-collapse',
                offset: 195
            });
        }
        /*END BOOTSTRAP SCROLL-SPY*/

        /*START CHANGE MENU BACKGROUND JS*/
        if ($('body').hasClass('inner-page')) {
            $('.header-top-area').addClass('menu-bg');
        }

        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 200) {
                $('.header-top-area').addClass('menu-bg');
            } else if (!$('body').hasClass('inner-page')) {
                $('.header-top-area').removeClass('menu-bg');
            }
        });
        /*END CHANGE MENU BACKGROUND JS*/

        /*START SMOOTH SCROLL JS*/
        $('a.smoth-scroll').on("click", function(e) {
            var anchor = $(this);
            var targetSelector = anchor.attr('href');
            if (!targetSelector || targetSelector.charAt(0) !== '#' || !$(targetSelector).length) {
                return;
            }
            $('html, body').stop().animate({
                scrollTop: $(targetSelector).offset().top - 60
            }, 1000);
            e.preventDefault();
        });
        /*END SMOOTH SCROLL JS*/

        /*START CONTACT MAP JS*/
        // var contact = {
        //     "lat": "23.1446247",
        //     "lon": "79.9048111"
        // }; 
        // try {
        //     $('.map').gmap3({
        //         action: 'addMarker',
        //         latLng: [contact.lat, contact.lon],
        //         map: {
        //             center: [contact.lat, contact.lon],
        //             zoom: 5
        //         },
        //     }, {
        //         action: 'setOptions',
        //         args: [{
        //             scrollwheel: false
        //         }]
        //     });
        // } catch (err) {}
  

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
