//$(document).ready(function () {
//    $('.button').on('click', function () {
//        $('div.circle3').toggle(300)
//    });
//});

$(document).ready(function () {
    $('div.circle3').on('click', function () {
        $('div.circle3').toggle(300)
    });
    $('div.circle2').on('click', function () {
        $('div.circle3').toggle(300)
    });
});





$(document).ready(function () {
    $('#hello').on('click', function () {
        $('#myDiv').toggle(300)
    });
    $('#jordan').on('click', function () {
        $('#kauffman').toggle(300)
    });
});



//$('#hello').on('click', function() {
//    
//    $('#myDiv').toggle(10000)
//})
//
//
//
//$('#jordan').on('click', function() {
//    
////    console.log('you have clicked the button')
//    
//    $('#kauffman').toggle(300)
//})

//$(document).ready(function () {
//    // IT WORKS!!! Now trying to see if I can add it to each section. It works to go from section to section within the larger .section-wrapper parent div. It doesn't work when placed outside that parent div. 
//    $(".scroll-next").click(function () {
//        var cls = $(this).closest(".section").next().offset().top;
//        $("html, body").animate({
//            scrollTop: cls
//        }, 700);
//    });
//});
//
//
//
//
//
//
//
//
//
//$('.button').on('click', function () {
//    $('.circle3').animate({
//        left: '50px',
//        opacity: '0.75',
//        height: '150px',
//        width: '150px',
//    })
//})


