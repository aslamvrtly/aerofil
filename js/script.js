	$(document).ready(function(){
	$(".owl-carousel").owlCarousel();
	});
	$('#slider-carousal').owlCarousel({
	loop:true,
	autoplay:true,
	margin:10,
	responsiveClass:true,
	nav:false,
	responsive:{
	0:{
	items:1,
	nav:false,
	loop:true
	},
	600:{
	items:1,
	nav:false,
	loop:true
	},
	1000:{
	items:1,
	nav:false,
	loop:true
	}
	}
	});
	$('#prod-caruosel').owlCarousel({
	loop:true,
	autoplay:true,
	margin:20,
	responsiveClass:true,
	nav:false,
	responsive:{
	0:{
	items:1,
	nav:false
	},
	600:{
	items:2,
	nav:false
	},
	1000:{
	items:5,
	nav:false,
	loop:true
	}
	}
	});

	
	// for round carousal item -->
		newheight=$('#prod-caruosel .owl-item').width();
		$('.prod-img').css("height", newheight);
	// <!-- For accordian -->
		var Accordion = function() {		  
		  var
		    toggleItems,
		    items;
		  
		  var _init = function() {
		    toggleItems     = document.querySelectorAll('.accordion__itemTitleWrap');
		    toggleItems     = Array.prototype.slice.call(toggleItems);
		    items           = document.querySelectorAll('.accordion__item');
		    items           = Array.prototype.slice.call(items);
		    
		    _addEventHandlers();
		    TweenLite.set(items, {visibility:'visible'});
		    TweenMax.staggerFrom(items, 0.9,{opacity:0, x:-100, ease:Power2.easeOut}, 0.3)
		  }
		  
		  var _addEventHandlers = function() {
		    toggleItems.forEach(function(element, index) {
		      element.addEventListener('click', _toggleItem, false);
		    });
		  }
		  
		  var _toggleItem = function() {
		    var parent = this.parentNode;
		    var content = parent.children[1];
		    if(!parent.classList.contains('is-active')) {
		      parent.classList.add('is-active');
		      TweenLite.set(content, {height:'auto'})
		      TweenLite.from(content, 0.6, {height: 0, immediateRender:false, ease: Back.easeOut})
		      
		    } else {
		      parent.classList.remove('is-active');
		      TweenLite.to(content, 0.3, {height: 0, immediateRender:false, ease: Power1.easeOut})
		    }
		  }
		  
		  return {
		    init: _init
		  }
		  
		}();

		Accordion.init();
