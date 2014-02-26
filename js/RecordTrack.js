var RecordTrack = (function($){
	var createTrack = function(){
		$("#addTrack").on("click", function(){
			$(this).hide();
			$("#stop").hide();
			$('#record').show();
/*
			$(this).attr("id","recordTrack");
			$("#recordTrack").bind('click',handleRecord);*/
			$(this).load();
			$("#newTrack").show();
		});
	},
	recordTrack = function(){
		$("#record").on("click",function(){
			$(this).hide();
			$("addTrack").hide();
			$("#stop").show();
		});
	},
	stopTrack = function(){
		$("#stop").on("click",function(){
			$(this).hide();
			$("#record").show();
		});
	},
	trashTrack = function(){
	},
	playTrack = function(){
		$("#play").on("click",function(){
			$(this).hide();
			$("#pause").show();
		});
	},
	pauseTrack = function(){
		$("#pause").on("click",function(){
			$(this).hide();
			$("#play").show();
		});
	},
	handleDragStart = function(e){
		$("#allTracks").css('background-color','teal');


		e.originalEvent.dataTransfer.effectAllowed = 'move';
  		e.originalEvent.dataTransfer.setData('text/html', this.innerHTML);
	},
	handleDragOver = function(e){
		if (e.preventDefault) {
    		e.preventDefault(); // Necessary. Allows drop.
  		}

  		return false;
	},
	handleDragEnd = function(e){
		$("#allTracks").css('background-color','white');
	},
	handleDrop = function(e){
		if (e.stopPropagation) {
    		e.stopPropagation(); // stops the browser from redirecting.
  		}

  		$(this).html(e.originalEvent.dataTransfer.getData('text/html'));
  		$("#newTrack").empty();
	},
/*	handleRecord = function(e){
		navigator.getMedia = ( 
			navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia
        );

        navigator.getMedia(
        	{audio:true},
        	function(localMediaStream){
        		console.log("Got Microphone");
        	}
        );
	},*/
	init = function(){
		$(document).ready(function(){
			$("#newTrack").hide();
			$("#record").hide();
			$("#stop").hide();
			$("#pause").hide();
			createTrack();
			recordTrack();
			stopTrack();
			playTrack();
			pauseTrack();

			//Drag and drop Event Handling
			$("#newTrack").bind('dragstart',handleDragStart);
			$("#allTracks").bind('dragover',handleDragOver);
			$("#newTrack").bind('dragend',handleDragEnd);
			$("#allTracks").bind('drop',handleDrop);

		});
	};
	return{
		init:init
	};
}(jQuery));