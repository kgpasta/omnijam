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
		$("#trash").on("click",function(){
			$("input:checkbox[name=type]:checked").each(function(){
				$(this).remove();
			});
		});

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
		$($("#allTracks").children("div")[0]).css('background-color','#DFF5F5');


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
		$($("#allTracks").children("div")[0]).css('background-color','white');
	},
	handleDrop = function(e){
		if (e.stopPropagation) {
    		e.stopPropagation(); // stops the browser from redirecting.
  		}

  		var container = $($(this).children("div")[0]);
  		container.prepend(e.originalEvent.dataTransfer.getData('text/html'));

  		$(container.children('#newTrackBox')[0]).css('height','20%');
  		$($(container.children('#newTrackBox')[0]).children('input')[0]).attr('value','oldTrack');

  		$("#newTrack").next(".waveform").empty();
  		$("#newTrack").hide();
  		$("#stop").hide();
  		$("#record").hide();
  		$("#addTrack").show();

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