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
        function updateHeaderState() {
            var scrollTop = $(window).scrollTop();
            var documentHeight = $(document).height() - $(window).height();
            var scrollPercent = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

            $('.header-scroll-line span').css('width', Math.min(scrollPercent, 100).toFixed(2) + '%');

            if (scrollTop > 90) {
                $('.header-top-area').addClass('menu-bg header-compact');
            } else {
                $('.header-top-area').removeClass('menu-bg header-compact');
            }
        }

        $(window).on('scroll resize', updateHeaderState);
        updateHeaderState();
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

        /*START HERO PANEL TILT JS*/
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            $('.js-hero-tilt').each(function() {
                var $panel = $(this);

                $panel.on('mousemove', function(e) {
                    var rect = this.getBoundingClientRect();
                    var percentX = (e.clientX - rect.left) / rect.width;
                    var percentY = (e.clientY - rect.top) / rect.height;
                    var rotateY = (percentX - 0.5) * 7;
                    var rotateX = (0.5 - percentY) * 6;

                    $panel.css('--hero-tilt-x', rotateX.toFixed(2) + 'deg')
                        .css('--hero-tilt-y', rotateY.toFixed(2) + 'deg')
                        .css('--hero-tilt-scale', '1.01');
                });

                $panel.on('mouseleave', function() {
                    $panel.css('--hero-tilt-x', '0deg')
                        .css('--hero-tilt-y', '0deg')
                        .css('--hero-tilt-scale', '1');
                });
            });
        }
        /*END HERO PANEL TILT JS*/

        /*START GENERIC DEPTH CARD TILT*/
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            var depthCards = document.querySelectorAll(
                '.theme-premium .about-story-panel, .theme-premium .about-proof-panel, .theme-premium .services-intro-panel, .theme-premium .single-service-box, .theme-premium .single-growth-step, .theme-premium .network-summary-card, .theme-premium .network-card, .theme-premium .brands-command-panel, .theme-premium .brands-ledger-panel, .theme-premium .brands-cta-ribbon, .theme-premium .single-work, .theme-premium .contact-conversion-box, .theme-premium .contact-benefits-box'
            );

            depthCards.forEach(function(card) {
                card.classList.add('js-depth-card');

                card.addEventListener('mousemove', function(e) {
                    var rect = card.getBoundingClientRect();
                    var percentX = (e.clientX - rect.left) / rect.width;
                    var percentY = (e.clientY - rect.top) / rect.height;
                    var rotateY = (percentX - 0.5) * 10;
                    var rotateX = (0.5 - percentY) * 8;

                    card.classList.add('is-depth-active');
                    card.style.transform = 'perspective(1400px) rotateX(' + rotateX.toFixed(2) + 'deg) rotateY(' + rotateY.toFixed(2) + 'deg) translateY(-8px)';
                });

                card.addEventListener('mouseleave', function() {
                    card.classList.remove('is-depth-active');
                    card.style.transform = '';
                });
            });
        }
        /*END GENERIC DEPTH CARD TILT*/

        /*START HEADER GLOW TRACKING*/
        if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
            var headerElement = document.querySelector('.header-top-area');
            if (headerElement) {
                headerElement.addEventListener('mousemove', function(e) {
                    var rect = headerElement.getBoundingClientRect();
                    var percentX = ((e.clientX - rect.left) / rect.width) * 100;
                    var percentY = ((e.clientY - rect.top) / rect.height) * 100;

                    headerElement.style.setProperty('--header-spot-x', percentX.toFixed(2) + '%');
                    headerElement.style.setProperty('--header-spot-y', percentY.toFixed(2) + '%');
                });
            }
        }
        /*END HEADER GLOW TRACKING*/

        /*START SCROLL REVEAL JS*/
        var revealTargets = document.querySelectorAll(
            '.section-title, .about-story-panel, .about-proof-panel, .about-city-strip, .services-intro-panel, .single-service-box, .single-growth-step, .team-card-shell, .network-summary-card, .network-card, .brands-command-panel, .brands-ledger-panel, .brands-cta-ribbon, .single-work, .contact-conversion-box, .contact-benefits-box, .brands-scope-strip, .lead-strip-copy, .lead-strip-actions'
        );
        if (revealTargets.length) {
            revealTargets.forEach(function(element, index) {
                element.classList.add('fx-reveal');
                element.style.transitionDelay = (index % 6) * 70 + 'ms';
            });

            if ('IntersectionObserver' in window) {
                var revealObserver = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            revealObserver.unobserve(entry.target);
                        }
                    });
                }, {
                    rootMargin: '0px 0px -14% 0px',
                    threshold: 0.1
                });

                revealTargets.forEach(function(element) {
                    revealObserver.observe(element);
                });
            } else {
                revealTargets.forEach(function(element) {
                    element.classList.add('is-visible');
                });
            }
        }
        /*END SCROLL REVEAL JS*/

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
