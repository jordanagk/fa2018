/*!
 * Assisted Scroll; version: 1.1
 */


$(document).ready(function () {
    // It works to go from section to section within the larger .section-wrapper parent div. It doesn't work when placed outside that parent div. 
    $(".scroll-next").click(function () {
        var cls = $(this).closest(".section").next().offset().top;
        $("html, body").animate({
            scrollTop: cls
        }, 700);
    });
});



// Code to take you to a very specific section on the page. Currently this code takes the user to the div that includes .top as a class. The div is at the top of the web page.
$(document).ready(function () {
    // *** .button-top is the object you'd click in-order to make the function work.
    $(".button-top").click(function () {
        $('html,body').animate({
            // *** .top is the div.class you'd include in your HTML
            scrollTop: $(".top").offset().top - 20
        }, 'slow');
    });
});


// Scroll assist for horizontal scrolling websites.
//$(document).ready(function () {
//    $("#scrollTo").click(function () {
//        $('.flex-container').animate({
//            scrollLeft: $("#container4").offset().left
//        }, 2000);
//    });
//});

$(document).ready(function () {
    $("#scrollTo").click(function () {
        $('.wrapper').animate({
            scrollLeft: $("#page2").offset().left
        }, 2000);
        console.log("Button Clicked");
    });
});


//$(document).ready(function () {
//    // It works to go from section to section within the larger .section-wrapper parent div. It doesn't work when placed outside that parent div. 
//    $(".scroll-next").click(function () {
//        var cls = $(this).closest(".section").next().offset().left;
//        $("html, body").animate({
//            scrollTop: cls
//        }, 700);
//    });
//});
