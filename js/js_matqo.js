/**
 * Created by Matqo on 30/11/2016.
 */


(function ($) {
    $(document).ready(function () {
        $(".main-secondary-Header .rotate").textrotator({
            animation: "dissolve",
            speed: 3000
        });


        $('#contact-form').find('input,textarea').jqBootstrapValidation();


        wow = new WOW({
            mobile: false
        });
        wow.init();


        $('#main-menu').onePageNav({
            currentClass: "active",
            changeHash: false,
            scrollThreshold: 0.5,
            scrollSpeed: 750,
            filter: "",
            easing: "swing"
        });

        $('.mouse-icon').click(function () {
            $('html, body').animate({
                scrollTop: $('#page-profile').offset().top
            }, 500);
            return false;
        });

        var navbar = $('.navbar');
        var navHeight = navbar.height();

        $(window).scroll(function () {
            if ($(this).scrollTop() >= navHeight) {
                navbar.addClass('navbar-color');
            }
            else {
                navbar.removeClass('navbar-color');
            }
        });

        if ($(window).width() <= 767) {
            navbar.addClass('custom-collapse');
        }

        $(window).resize(function () {
            if ($(this).width() <= 767) {
                navbar.addClass('custom-collapse');
            }
            else {
                navbar.removeClass('custom-collapse');
            }
        });

        /* For Bootstrap current state on portfolio sorting */

        $('ul.nav-pills li a').click(function (e) {
            $('ul.nav-pills li.active').removeClass('active')
            $(this).parent('li').addClass('active')
        })

        /* portfolio mixitup */
        $(window).load(function () {
            var $container = $('.grid-wrapper');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });

            $('.grid-controls li a').click(function () {
                $('.grid-controls .current').removeClass('current');
                $(this).addClass('current');

                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });
        });


        /* Magnific Popup */
        $('.grid-wrapper').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        var bg = jQuery("body");
        jQuery(window).resize("resizeBackground");
        function resizeBackground() {
            bg.height(jQuery(window).height());
        }
        resizeBackground();


        /*
         $.srSmoothscroll({
         // defaults
         step: 55,
         speed: 400,
         ease: 'swing',
         target: $('body'),
         container: $(window)
         })
         */

        /*

         $('element_to_pop_up').bPopup({
         easing: 'easeOutBack', //uses jQuery easing plugin
         speed: 450,
         transition: 'slideDown'
         });*/
        /*        $('#contact-form').find('input,textarea').jqBootstrapValidation({
         preventSubmit: true,
         submitError: function($form, event, errors) {
         // additional error messages or events
         },
         submitSuccess: function($form, event) {
         event.preventDefault();

         var submit          = $('#contact-form submit');
         var ajaxResponse    = $('#contact-response');
         var name            = $('#contact-form [name="name"]').val();
         var email           = $('#contact-form [name="email"]').val();
         var message         = $('#contact-form [name="message"]').val();

         $.ajax({
         type: 'POST',
         url: '../php/contact.php',
         dataType: 'json',
         data: {
         name: name,
         email: email,
         message: message,
         },
         cache: false,
         beforeSend: function(result) {
         submit.empty();
         submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
         },
         success: function(result) {
         if(result.sendstatus == 1) {
         ajaxResponse.html(result.message);
         $form.fadeOut(500);
         } else {
         ajaxResponse.html(result.message);
         }
         }
         });
         }
         });*/
    });
})(jQuery);

$(function () {
    $('#hireButton, #contactButton').click(function () {

        $('#contact').bPopup({
            easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown'
        })
    });
});

$(function () {
    $('#closeButton').on('touchstart click', function () {
        $('#contact').bPopup().close()
    });
});


$(function () {
    $('#src').click(function () {

        $('#source').bPopup({
            easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideUp'
        })
    });
});

$(function () {
    $('#closeSrcButton').on('touchstart click', function () {
        $('#source').bPopup().close()
    });
});
/*function switch1() {

 $('#sH1').fadeOut(function () {
 $('#sH2').toggle('slide', {
 direction: 'right'
 }, 1000);
 });


 }
 $(document).ready(function() {
 $('#sH2').toggle('slide', {
 direction: 'left'
 }, 1000, function(){ $('#sH1').fadeIn();});

 setInterval(switch1, 1000 );

 }*/

/*
 function switch1(){
 $("#sH1").toggle("slide");
 $("#sH2").toggle("slide");

 }

 $(document).ready(function() {
 $("#sH2").toggle("slide");
 setInterval(switch1, 2000 );


 });
 */
