	$(".advantage-block").ready(function(){
		$(".first").hide();
		$(".second").hide();
		$(".third").hide();
	});

	function advantageFadeIn() {
		$(".advantage-block").ready(function(){
			$(".first").fadeIn(600, function(){
				$(".second").fadeIn(600, function(){
					$(".third").fadeIn(600);
				});
			});
		});
	}

$(document).ready(function(){
	$(".head-banner > h3").fadeIn(600, function(){
		$(".head-banner > h4").fadeIn(600, function(){
			$(".head-banner > h1").fadeIn(600, advantageFadeIn);
		});
	});
});