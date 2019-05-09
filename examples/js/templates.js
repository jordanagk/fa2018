// ** On Click Toggle Function Template ** //
// To make work replace #id with the id name of the div, button, or other HTML tag that you want to click to start your function. Then replace the #Other_ID with the id name of the tag that you want to go from invisible to visible.


$(document).ready(function () {

    $('#id').on('click', function () {
        $('#Other_ID').toggle(300)
    });
});


// ** On Click Animate Function Template ** //
// To make work replace .class with the class name of the div, button, or other HTML tag that you want to click to start your function. Then replace the .Other_class with the class name of the tag that you want to be animated on the click.


$(document).ready(function () {
    $('.class').on('click', function () {
        $('.Other_class').animate({
            left: '50px',
            opacity: '0.75',
            height: '150px',
            width: '150px',
        })
    });
});





// ** On Click Toggle Class Function Template ** //
// To make work replace .class1 with the class name of the div, button, or other HTML tag that you want to click to toggle your classes on. Then replace the #id with the id name of the tag that you want to click to toggle the classes off. Replace .replace with the div.class name you want to toggle. Replace .replace2 with the name of the other div.class name you want to toggle.

$(document).ready(function () {


    /* Toggle On */
    $(".class1").click(function () {
        $(".replace").toggleClass("name of class you are adding");
        $(".replace2").toggleClass("name of the other class you are adding");
    });

    /* Toggle Off */
    $("#id").click(function () {
        $(".replace").toggleClass("name of class you are taking away");
        $(".replace2").toggleClass("name of class you are taking away");
    });
});
