var RecordTrack = (function($){
	var createTrack = function(){
		$("#addTrack").on("click", function(){
			console.log("hey");
			$(this).attr("src","assets/icons/Record-Normal-icon.png");
			$(this).load();
			$("#recordSpace").show();
		});
	},
	init = function(){
		$(document).ready(function(){
			$("#recordSpace").hide();
			createTrack();
		});
	};
	return{
		init:init
	};
}(jQuery));