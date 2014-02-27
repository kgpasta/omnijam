var ChatBox = (function($){
	var enterText = function(){
		$("textarea").on("keypress",function(event){
			var keycode = (event.keyCode ? event.keyCode : event.which);
			if(keycode == '13'){
				var text = $("textarea").val();
				$("#chatText").append("<p><b>Username: </b>"+text+"</p>");
				$("textarea").val('');
				event.preventDefault();
			}
		});
	},
	init = function(){
		$(document).ready(function(){
			enterText();
		});
	};
	return {
		init:init
	};
}(jQuery));