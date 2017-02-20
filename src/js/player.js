'use strict';
var player;
var YouTubeIframeLoader = require('youtube-iframe');
var paperCanvas = document.getElementById('canvas');
var fadeOut;
var fadeIn;

var ready = false;
YouTubeIframeLoader.load(function(YT) {
	player = new YT.Player('ytplayer', {
		events: {
		'onReady': onPlayerReady
		}
	});
});

function onPlayerReady() {
	ready = true;
	player.setVolume(0);
	player.playVideo();
}

paperCanvas.onmousedown = function(e){
	clearInterval(fadeOut);
	if(ready){
		if(player.getVolume() < 100){
			fadeIn = setInterval(function(){
				player.setVolume(player.getVolume() + 1);
			}, 50)
		}
	}
}

paperCanvas.onmouseup = function(e){
	clearInterval(fadeIn);
	if(ready){
		if(player.getVolume() > 0){
			fadeOut = setInterval(function(){
				player.setVolume(player.getVolume() - 1);
			}, 50)
		}
	}
}
