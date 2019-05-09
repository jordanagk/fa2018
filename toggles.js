//Reminder to add the class of visible to your css with the following property and value
//opacity: 1;
//You also need to add the following property and value to each of the modals in your CSS
//opacity: 0;

// Button to open a modal
$(document).ready(function (){
    $('#specific_button_id').click(function() {
        $("#modal-normal-1").toggleClass("visible")
        });
});

// Button to close a modal
$(document).ready(function (){
    $('#modal-normal-1-close').click(function() {
        $("#modal-normal-1").toggleClass("visible")
        });
});