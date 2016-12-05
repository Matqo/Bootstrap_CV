/**
 * Created by Matqo on 30/11/2016.
 */


(function($){
    $(document).ready(function(){
        $(".secondary-Header .rotate").textrotator({
            animation: "dissolve",
            speed: 3000
        });

        $('#contact-form').find('input,textarea').jqBootstrapValidation();



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

$(function(){
    $('#hireButton').click(function(){

        $('#contact').bPopup({
            easing: 'easeOutBack', //uses jQuery easing plugin
            speed: 450,
            transition: 'slideDown'
        })
    });
});

$(function(){
    $('#closeButton').click(function(){

        $('#contact').bPopup().close()
    });
});

$(function(){
    $('#closeButton').on('touchstart click', function(){

        $('#contact').bPopup({

            
        })
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
