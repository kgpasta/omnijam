var RecordTrack = (function($){
	var createTrack = function(){
		$("#addTrack").on("click", function(){
			$(this).attr("src","assets/icons/Record-Normal-icon.png");
			$(this).load();
			$("#newTrack").show();
		});
	},
	init = function(){
		$(document).ready(function(){
			$("#newTrack").hide();
			createTrack();
		});
	};
	return{
		init:init
	};
}(jQuery));