	(function($) {
	  "use strict";
		// DM Top
		jQuery(window).scroll(function(){
			if (jQuery(this).scrollTop() > 1) {
				jQuery('.dmtop').css({bottom:"25px"});
			} else {
				jQuery('.dmtop').css({bottom:"-100px"});
			}
		});
		jQuery('.dmtop').click(function(){
			jQuery('html, body').animate({scrollTop: '0px'}, 800);
			return false;
		});
	
		// Top Bar
		$(document).ready(function() {
			// jBar Script by Todd Motto
			$('.downbar').delay(100).fadeIn(400).addClass('up', 600);
			$('.jquery-bar').hide().delay(2500).slideDown(400);
			$('.jquery-arrow').click(function(){
				$('.downbar').toggleClass('up', 400);          
				$('.jquery-bar').slideToggle();
			});     
		});


		// WOW
			new WOW(
				{ offset: 200 }
			).init();

		// Accordion Toggle Items
		   var iconOpen = 'fa fa-minus',
				iconClose = 'fa fa-plus';
		
			$(document).on('show.bs.collapse hide.bs.collapse', '.accordion', function (e) {
				var $target = $(e.target)
				  $target.siblings('.accordion-heading')
				  .find('em').toggleClass(iconOpen + ' ' + iconClose);
				  if(e.type == 'show')
					  $target.prev('.accordion-heading').find('.accordion-toggle').addClass('active');
				  if(e.type == 'hide')
					  $(this).find('.accordion-toggle').not($target).removeClass('active');
			});
			
	})(jQuery);