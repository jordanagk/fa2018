// NOT WORKING – THIS IS AN EXAMPLE OF WHAT NOT TO DO!!!! This code doesn't work well as it has some glitches between transition states.



// Gree Tea Open
$(document).ready(function (){
    $('#rotate-one').on('click', function() {
        $("#one-cup").toggleClass("invisible")
        $("#two-cup").toggleClass("visible")
        $("#two-cup").toggleClass("rotated")
        $("#one-cup").toggleClass("rotated")
        $("#two-cup").toggleClass("animation")
        $('.green-tea-information-container').toggleClass("visible")
        $('.green-tea-information-container').toggleClass("animation-info")
    });
});

// Gree Tea Close
$(document).ready(function (){
    $('#green-tea-close').on('click', function() {
        $("#one-cup").toggleClass("invisible")
        $("#two-cup").toggleClass("visible")
        $("#two-cup").toggleClass("rotated")
        $("#one-cup").toggleClass("rotated")                
        $("#two-cup").toggleClass("animation")
        $('.green-tea-information-container').toggleClass("visible")
        $('.green-tea-information-container').toggleClass("animation-info")
        $("#two-cup").toggleClass("rotate-back-animation")
        $("#one-cup").toggleClass("rotate-back-animation")
    });
});


