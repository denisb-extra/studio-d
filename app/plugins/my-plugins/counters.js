(function ( $ ) {
 


$.fn.counters = function() {
	var mainElement = this;
	$(mainElement).find('.counter-value').each(function() {
		var $this = $(this);
		countTo = $this.attr('data-count');
		$this.find(".num").text(countTo);
		$this.find(".num").text(0);
	});
    var scrollHandlerCounters = function(){
		  var oTop = $(mainElement).offset().top - window.innerHeight;
		  if ($(window).scrollTop() > oTop) {
			$(mainElement).find('.counter-value').each(function() {
			  var $this = $(this),
				countTo = $this.attr('data-count');
			  $({
				countNum: $this.find(".num").text()
			  }).animate({
				  countNum: countTo
				},

				{
				  duration: 2000,
				  easing: 'swing',
				  step: function() {
					$this.find(".num").text(Math.floor(this.countNum));
				  },
				  complete: function() {
					$this.find(".num").text(this.countNum);
				  }

				});
			});
			$(window).off("scroll", scrollHandlerCounters);
		  }
	}

	scrollHandlerCounters();

	$(window).scroll(scrollHandlerCounters);

};


}( jQuery ));