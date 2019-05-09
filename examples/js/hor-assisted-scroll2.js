		jQuery(function( $ ){
			/**
			 * Demo binding and preparation, no need to read this part
			 */
			
			// This one is important, many browsers don't reset scroll on refreshes
			// Reset all scrollable panes to (0,0)
			$('body').scrollTo(0);
			// Reset the screen to (0,0)
			$.scrollTo(0);
			
			// TOC, shows how to scroll the whole window
			$('#toc a').click(function() {//$.scrollTo works EXACTLY the same way, but scrolls the whole screen
				$.scrollTo(this.hash, 1500, { easing:'elasout' });
				$(this.hash).find('span.message').text(this.title);
				return false;
			});
			
			// Target
			var $target = $('body');
            
// important code section
            //********** jQuery-object on click code ************
			$('#jquery-object').click(function() {
				$target.scrollTo($('#pane-target li:eq(5)') , 800);
			});
            
            //********** DOM-element on click code ************
			$('#dom-element').click(function() {
             $target.scrollTo(document.getElementById('twenty'), 800);
			});
            
            //end of important code section for taking the user to a specific section horizontally on click
            
            $('#test2').click(function() {
            $target.scrollTo($('#s2') , 800);
			});
            
            $('#test4').click(function() {
            $target.scrollTo($('#s4') , 800);
			});
            
            $('#test5').click(function() {
            $target.scrollTo($('#s5') , 800);
			});
            
            //********** DOM-element on click code ************
			$('#test3').click(function() {
             $target.scrollTo(document.getElementById('s3'), 800);
			});
            
            $('button.back2start').click(function() {
             $target.scrollTo(document.getElementById('la-devote'), 800);
			});
            
            
		});
