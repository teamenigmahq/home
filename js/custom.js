"use strict";
$(document).ready(function() {

    $("select").niceSelect();

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        AOS Animation Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    AOS.init();
    window.addEventListener("load", AOS.refresh);
    AOS.init({
        once: true
    })



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
         Landing 2 Testimonial
     <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    if (jQuery(".testimonial-slider-l2-1").length > 0) {
        $('.testimonial-slider-l2-1').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l2-slider-arrow-1',
            prevArrow: $('.prevl2'),
            nextArrow: $('.nextl2'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }


    /*l2 Testimonial slider button active*/

    $(document).ready(function() {
        $('.l2-slider-arrow-1 i').click(function() {
            $('.l2-slider-arrow-1 i').removeClass("slick-active");
            $(this).addClass("slick-active");
        });
    });

    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Landing 5 Product Slider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    if (jQuery(".product-slider-l5").length > 0) {
        $('.product-slider-l5').slick({

            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            swipe: true,
            infinite: true,
            autoplaySpeed: 2000,
            appendArrows: '.l5-product-slider',
            prevArrow: $('.prev5-1'),
            nextArrow: $('.next5-1'),
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }


    /* Landing 5 Product Slider button active*/

    $(document).ready(function() {
        $('.l5-product-slider i').click(function() {
            $('.l5-product-slider i').removeClass("slick-active");
            $(this).addClass("slick-active");
        });
    });




    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
        Landing 7 Hero slider
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    if (jQuery(".hero-l7-slider").length > 0) {
        $('.hero-l7-slider').slick({
            //  autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            swipe: true,
            infinite: true,
            appendArrows: '.testimonial-one-button',
            prevArrow: '<button type="button" class="slick-prev"><i class="icon icon-minimal-left"></i></button>',
            nextArrow: '<button type="button" class="slick-next"><i class="icon icon-minimal-right"></i></button>',
            autoplaySpeed: 2000,
            responsive: [{
                    breakpoint: 1199,
                    settings: {
                        centerPadding: '10%',
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        centerPadding: '20px',
                        slidesToShow: 1
                    }
                }

            ]
        });
    }






    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Counter Up Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });





    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Sticky Header
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            $(".site-header--sticky").addClass("scrolling");
        } else {
            $(".site-header--sticky").removeClass("scrolling");
        }
        if (
            document.body.scrollTop > 700 ||
            document.documentElement.scrollTop > 700
        ) {
            $(".site-header--sticky.scrolling").addClass("reveal-header");
        } else {
            $(".site-header--sticky.scrolling").removeClass("reveal-header");
        }
    }




    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
           Smooth Scroll
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(".goto").on("click", function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate({
                    scrollTop: $(hash).offset().top,
                },
                2000,
                function() {
                    window.location.hash = hash;
                }
            );
        } // End if
    });



    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Preloader Activation
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/

    $(window).load(function() {
        setTimeout(function() {
            $("#loading").fadeOut(500);
        }, 1000);
        setTimeout(function() {
            $("#loading").remove();
        }, 2000);
    });




    /*>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>      
          Home-2- testimonial  Slider Appex
    <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<*/
    var slickContentslide = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        asNavFor: '.l2-testimonial-image-slider',
        adaptiveHeight: false,
        prevArrow: $('.prev3'),
        nextArrow: $('.next3'),
        fade: true,
        cssEase: 'linear'
    }

    var slickImgslide2 = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: false,
        asNavFor: '.l2-testimonial-text-slider',
        prevArrow: $('.prev3'),
        nextArrow: $('.next3'),
        fade: true,
        cssEase: 'linear'
    }


    $('.l2-testimonial-image-slider').slick(slickImgslide2);
    $('.l2-testimonial-text-slider').slick(slickContentslide);

    /*l2 Testimonial slider button active*/

    $(document).ready(function() {
        $('.next-prev-btn3 span').click(function() {
            $('.next-prev-btn3 span').removeClass("active");
            $(this).addClass("active");
        });
    });




});