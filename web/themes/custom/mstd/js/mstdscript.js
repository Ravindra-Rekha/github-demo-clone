jQuery(document).ready(function() {	
	
		//Jquesy for feedback & Suggestion and Employee Corner Marquee to work after getting four contents	
		counter = jQuery('.vertical-scroll li').length;		
		if(counter>3){jQuery(".item-list").scrollForever({dir:"top",container:".vertical-scroll",inner:"li"});}				
		
		counter = jQuery('.tbvertical-scroll li').length;		
		if(counter>3){jQuery(".tbitem-list").scrollForever({dir:"top",container:".tbvertical-scroll",inner:"li"});}
		
		counter = jQuery('.ybvertical-scroll li').length;		
		if(counter>3){jQuery(".ybitem-list").scrollForever({dir:"top",container:".ybvertical-scroll",inner:"li"});}
		
			
		jQuery('#black-color-transform').click(function(){
			jQuery('body').toggleClass('black-bg');
			jQuery('#black-color-transform').toggleClass('active');
		});	
	

	    //jQuery for page scrolling feature for up and down link
		jQuery('.scrollable').click(function() {
		  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
			  jQuery('html, body').animate({
				scrollTop: target.offset().top - 88,				
			  }, 1000);
			  return false;
			}
		  }
		});
		jQuery(".region-footer .other_gov_links table tr td").html(jQuery(".region-footer .other_gov_links table tr td").html()+jQuery(".region-footer .other_gov_links table td").html()+jQuery(".region-footer .other_gov_links table td").html());
		
		jQuery(".region-footer .other_gov_links table tr td ul a").hover(
		function() {jQuery(".region-footer .other_gov_links table tr td ul").css("animation-play-state", "paused")}
		);
		
		jQuery(".region-footer .other_gov_links table tr td ul a").mouseout(
		function() {jQuery(".region-footer .other_gov_links table tr td ul").css("animation-play-state", "running")}
		);
		
		jQuery(".eslink .click").hover(
	function() {
				if(jQuery(this).parent().children('a').css('display')=='block'){
					return false;
				}
				jQuery('.eslink ul li a').css('width','0');	
				background=jQuery(this).css('background-color');
				jQuery('.eslink ul li a').css('height','50px');
				jQuery('.eslink ul li a').css('background-color','transparent');
				jQuery(this).parent().children('a').css('background-color',background);
				jQuery(this).parent().children('a').css('width','240px');
				jQuery('.eslink ul li a').css('display','none');
				jQuery(this).parent().children('a').toggle( 'slide', {direction: 'left'}, 250 );
			}
	);
		
	jQuery(".eslink li, .text-resizeable-container").mouseout(
		function() {
			jQuery('.eslink ul li a').css('display','none');
			return true;}
	);		
		
	jQuery(".text-resizeable-container").hover(
		function() {
			jQuery('.eslink ul li a').css('display','none');
			return true;}
	);
		
	jQuery(".not-front #block-block-20 .view-information-sector").hover(
		function() {
				jQuery(this).children('.view-content').children('.item-list').slideToggle( 'fast');			
				jQuery(this).children('.more-link').slideToggle('fast');				
			}
	);
	
	jQuery(".not-front .eslink span").click(
		function() {
				if(jQuery('.not-front .eslink ul').css('display') == 'block'){
					jQuery('.not-front .eslink span').html('>');
				}
				else{
					jQuery('.not-front .eslink span').html('<');
				}
					
				jQuery('.not-front .eslink ul').toggle( 'slide', {direction: 'left'}, 200);
				var toggleWidth = jQuery(".not-front .eslink span").css('left') == '57px' ? "0px" : "57px";
				jQuery('.not-front .eslink span').animate({ left: toggleWidth }, 200);
			}
	);
	
	/*
	jQuery(".eslink .click").hover(
	function() {
				if(jQuery(this).parent().children('a').css('display')=='block'){
					return false;
				}
				jQuery('.eslink ul li a').css('width','0');	
				background=jQuery(this).css('background-color');
				jQuery('.eslink ul li a').css('height','50px');
				jQuery('.eslink ul li a').css('background-color','transparent');
				jQuery(this).parent().children('a').css('background-color',background);
				jQuery(this).parent().children('a').css('width','240px');
				jQuery('.eslink ul li a').css('display','none');
				jQuery(this).parent().children('a').toggle( 'slide', {direction: 'right'}, 250 );
			}
	);
		
	jQuery(".eslink li, .text-resizeable-container").mouseout(
		function() {
			jQuery('.eslink ul li a').css('display','none');
			return true;}
	);
		
		
	jQuery(".text-resizeable-container").hover(
		function() {
			jQuery('.eslink ul li a').css('display','none');
			return true;}
	);
	
	old code
	jQuery(".eslink .click").click(
	function() {
			if(jQuery(this).parent().children('a').css('display')=='block'){
				jQuery('.eslink ul li a').css('display','none');
				return false;
			}
			jQuery('.eslink ul li a').css('width','0');	
			background=jQuery(this).css('background-color');
			jQuery('.eslink ul li a').css('height','50px');
			jQuery('.eslink ul li a').css('background-color','transparent');
			jQuery(this).parent().children('a').css('background-color',background);
			jQuery(this).parent().children('a').css('width','240px');
			jQuery('.eslink ul li a').css('display','none');
			jQuery(this).parent().children('a').toggle( 'slide', {direction: 'right'}, 500 );
		}
	);
	
	jQuery(".text-resizeable-container").click(
		function() {
			jQuery('.eslink ul li a').css('display','none');
			return true;}
	);*/
}); // End document.ready



if (jQuery(window).width() > 768) {
jQuery(document).scroll(function () {
 if ( jQuery( "body.front" ).length ){
    var y = jQuery(this).scrollTop();
    if (y > 50){		
		jQuery('.complete-header').addClass('sticky');
		jQuery('.static-header').addClass('hide');		
        jQuery('.header-main-menu').fadeIn();
    } else {
        jQuery('.header-main-menu').fadeOut();
		jQuery('.complete-header').removeClass('sticky');
		jQuery('.static-header').removeClass('hide');
		jQuery('.header-main-menu').removeClass('hide');
    } // End Here
  }
});
}

//banner & alert ticker
jQuery(function(){
		jQuery('#banner-alert-ticker ul').tickerme();
});

(function($) {

 $.fn.scrollForever = function(options) {

  var defaults = {
  
   dir: 'left',
   container: 'ul',
   inner: 'li',
   speed: 1000,
   delayTime: 50,
   continuous: true,
   num: 1
  };
  var opts = $.extend({}, defaults, options);
  var placeHolder = opts.placeholder;
  var dir = opts.dir;
  var speed = opts.speed;
  var Time = opts.Time;
  var num = opts.num;
  var delayTime = opts.delayTime;
  return this.each(function() {
   var obj = $(this);
   var container = obj.find(opts.container);
   var inner = container.find(opts.inner);
   var len = inner.length;
   var distance, scrollDistance, scrollTime, resizeTimer, cloneFlag=true, innerWidth, innerHeight;
   
   function setScroll() {
    innerWidth = inner.outerWidth();
    innerHeight = inner.outerHeight();
    if (opts.continuous) {
     if (dir == 'left') {
      distance = innerWidth * len;
      container.css('width', 1 * distance);
      if(cloneFlag){
       inner.clone().appendTo(container);
       cloneFlag = false;
      }
     } else if (dir == 'top') {
      distance = innerHeight * len;
      container.css('height', 1 * distance);
      if(cloneFlag){
       inner.clone().appendTo(container);
       cloneFlag = false;
      }
     }
    } else {
     if (dir == 'left') {
      placeHolder = placeHolder != 0 ? placeHolder : innerWidth * num;
      distance = innerWidth * (len + 1);
      container.css('width', distance);
     } else if (dir == 'top') {
      placeHolder = placeHolder != 0 ? placeHolder : innerHeight * num;
      distance = innerHeight * (len + 1);
      container.css('height', distance);

     }
    }
   }
   
   $(window).on("resize",function(){
    clearTimeout(resizeTimer);
    resizeTimer =  setTimeout(setScroll,250);
   })
   setScroll();
   function autoScroll() {

    if (opts.continuous) {
     
     if (dir == 'left') {
      scrollDistance = obj.scrollLeft();
      if (scrollDistance >= distance) {
       obj.scrollLeft(0);
      } else {
       obj.scrollLeft(scrollDistance + 2);
      }
     } else if (dir == 'top') {
      scrollDistance = obj.scrollTop();
      if (scrollDistance >= distance) {
       obj.scrollTop(0);
      } else {
       obj.scrollTop(scrollDistance + 2);
      }
     }
    } else { 
     
     if (dir == 'left') {
      container.animate({
       marginLeft: '-' + placeHolder
      }, speed, function() {
       container.css({
        marginLeft: 0
       }).find(opts.inner + ":lt(" + num + ")").appendTo(container);
      });
     } else if (dir == 'top') {
      container.animate({
       marginTop: "-" + placeHolder
      }, speed, function() {
       container.css({
        marginTop: 0
       }).find(opts.inner + ":lt(" + num + ")").appendTo(container);
      });
     }
    }

   }
  
   var aTime = opts.continuous == true ? 20 : 2000;
   delayTime = delayTime == 0 ? aTime : delayTime;
   scrollTime = setInterval(autoScroll, delayTime);
   obj.hover(function() {
    clearInterval(scrollTime);
   }, function() {
    scrollTime = setInterval(autoScroll, delayTime);
   });
  })
 }
})(jQuery);


jQuery(function() {
//----- OPEN
jQuery('#block-views-urgent-notifications-text-block .table-responsive .language-link').on('click', function(e) {
var target_link = jQuery(this).attr('href');
var popup_html = '<div class="popup" data-popup="popup" onclick="popupClose();"><div class="popup-inner" onclick="javascript:return false;"><a class="popup-close" data-popup-close="popup" href="javascript:popupClose();" style="color:#ffffff;">x</a><iframe src="'+target_link+'" height="275" width="650"></iframe></div></div>';
jQuery(".views-field-field-enable-popup").html(popup_html);
jQuery(".views-field-field-enable-popup").css("display","block");
jQuery('[data-popup="popup"]').fadeIn(350);
e.preventDefault();
});


});

function popupClose(){
//----- CLOSE
jQuery('[data-popup="popup"]').fadeOut(350);
}

jQuery(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        popupClose();
    }
});

jQuery(document).ready(function (e) {
	if(!jQuery.cookie('popup'))
	{
		if(parseInt(jQuery('.views-field-field-enable-popup').text())==1 && jQuery('.views-field-field-enable-popup') && jQuery('body').hasClass("front") && jQuery('body').hasClass("not-logged-in"))
		{
			jQuery('#block-views-urgent-notifications-text-block .table-responsive .language-link').click();
			
			var expDate = new Date();
			expDate.setTime(expDate.getTime() + (15 * 60 * 1000)); // add 15 minutes
			jQuery.cookie('popup','1', { expires: expDate });
		}
	}
});




/* Latest Changes You Tube */
/*
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
function onYouTubeIframeAPIReady() {
	var $ = jQuery;
	var players = [];
	$('iframe').filter(function(){return this.src.indexOf('www.youtube.com/') !== 0}).each( function (k, v) {
		if (!this.id) { this.id='embeddedvideoiframe' + k; this.src = this.src + '?&enablejsapi=1';}
		players.push(new YT.Player(this.id, {
			events: {
				'onStateChange': function(event) {
					if (event.data == YT.PlayerState.ENDED) {
						$.each(players, function(k, v) {
							if (this.getIframe().id == event.target.getIframe().id) {
								this.seekTo(0);
								this.pauseVideo();
								//this.pauseVideo();
							}
						});
					}
				}
			}
		}))
	});
}
*/	
jQuery(window).scroll(function() {

    if (jQuery(this).scrollTop()==0)
     {
		jQuery('.not-front .eslink').show( 'slide', {direction: 'left'}, 300);
     }
    else
     {
		jQuery('.not-front .eslink').hide( 'slide', {direction: 'left'}, 300);
     }
});
	
