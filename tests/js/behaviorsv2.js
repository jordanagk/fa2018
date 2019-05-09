// Actually working and giving us the exact functionality we are looking for. In order for there to be nice transition animations you need to make sure that the class.transform is applied to all things that have things toggling on and off. For example img#one-cup and img#two-cup both have the class.transform always applied to them. This tells the browser that we want to apply transitions on all values, have it last 2.5 seconds, and have ease applied.


$(document).ready(function (){
    $('#rotate-one').click(function() {
        $("#one-cup").toggleClass("rotated")
        $("#one-cup").toggleClass("invisible")
        $("#two-cup").toggleClass("rotated")
        $("#two-cup").toggleClass("visible")
        $('.green-tea-information-container').toggleClass("visible")
        });
});

$(document).ready(function (){
    $('#green-tea-close').click(function() {
        $("#one-cup").toggleClass("rotated")
        $("#one-cup").toggleClass("invisible")
        $("#two-cup").toggleClass("rotated")
        $("#two-cup").toggleClass("visible")
        $('.green-tea-information-container').toggleClass("visible")
        });
});

//Code below is used to rotate all the cups in Tea Cup Rotation at the same time.

$(document).ready(function (){
    $('#rotate-all').click(function (){
        $('#cup1').toggleClass("rotated")
        $('#cup2').toggleClass("rotated")
        $('#cup3').toggleClass("rotated")
        $('#cup4').toggleClass("rotated")
        $('#cup5').toggleClass("rotated")
    });
});