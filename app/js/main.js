$(document).ready(function ($) {
    window.addEventListener('scroll', onScroll);
    function onScroll(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop;
            shrinkOn = 30;
        if (distanceY > shrinkOn) {
            $("header" ).addClass("scrolled");
        } else {
            $("header" ).removeClass("scrolled");
        }
    }
    onScroll();
    
    
    $(".mobile_menu").simpleMobileMenu({
        "menuStyle": "slide",
    });

    document.addEventListener( 'wpcf7mailsent', function( event ) {
        var inputs = event.detail.inputs;
        thankyouPage = getFieldValueByName(inputs, "thankyou-page");
        if(thankyouPage) window.location = thankyouPage;
    }, false );

    $("body").scrolledTo();
});

function getFieldValueByName(ar, name){
    var result = "";
    ar.forEach(function(item) {
        if(item.name == name) result = item.value;
    });
    return result;
}


(function ( $ ) {
 

    $.fn.scrolledTo = function() {
        var mainElement = this;
    
        var scrollHandlerWait = function(){
            $(mainElement).find(".wait-for-scroll").each(function(){
                var oTop = $(this).offset().top - window.innerHeight + $(this).height();
                if ($(window).scrollTop() > oTop) {
                    $(this).addClass('scrolled-to');
                    $(this).removeClass('wait-for-scroll');
                }
            });
            
        }
    
        $(window).scroll(scrollHandlerWait);
        $(document).ready(scrollHandlerWait);
    };
    
    
    
    }( jQuery ));
    
    