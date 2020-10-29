$(document).ready(function () {
    jQuery.fn.clickOutside = function(callback){
        var $me = this;
        $(document).mouseup(function(e) {
            if ( !$me.is(e.target) && $me.has(e.target).length === 0 ) {
                callback.apply($me);
            }
        });
    };
    $("#small-screens .open-menu").click(function (e) { 
        e.preventDefault();
        $("#small-screens .menu").slideToggle("fast");
        $("body").toggleClass("overflow-y-hidden")
        $(this).find("i").toggleClass("fa-times")
    })
    $("#small-screens").clickOutside(function () { 
        $("#small-screens .menu").slideUp("fast");
        $("body").removeClass("overflow-y-hidden")
        $(this).find("i").removeClass("fa-times")
    })
    
    $("#slider .owl-carousel").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true
    });
});