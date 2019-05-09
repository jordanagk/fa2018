/*basic */
$(document).ready(function(){ 


/* info toggle */
    $(".button").click(function(){
        $(".info").toggleClass("none");
        $(".popup").toggleClass("visible");
        });
    
    /*Back from Coda*/
    $("#close-out").click(function(){
        $(".info").toggleClass("none");
       $(".popup").toggleClass("visible");
         });


    /* toggle template */
    $(".").click(function(){
        $(".").toggle(1000);
    });
    
});