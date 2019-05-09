		jQuery(function($){
			
            // ******* Don't change code in this section ****** //
			
			$('body').scrollTo(0);
			// Reset the screen to (0,0)
			$.scrollTo(0);
			
			// Target
			var $target = $('body');
            
            // ******* Code below is the functions that connect to the individual buttons ****** //
             
            // Button in Section 1
            $('#p2').click(function() {
            $target.scrollTo($('#page2') , 800);
			});
            
            // Button in Section 2
            $('#p3').click(function() {
            $target.scrollTo($('#page3') , 800);
			});
            
            // Button in Section 3
            $('#p4').click(function() {
            $target.scrollTo($('#page4') , 800);
			});
            
            // Button in Section 4
            $('button#back').click(function() {
             $target.scrollTo(document.getElementById('baseball'), 800);
			});
            
            
		});
