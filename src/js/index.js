'use strict';

var paper = require('paper');
var randomColor = require('randomcolor');
require ('../css/style.css')

paper.install(window);

window.onload = function() {
	paper.setup('canvas');

	var hues = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'];

	for (var i = 0; i < hues.length; i++){
		var maxPoint = new Point(view.bounds.width, view.bounds.height);
		drawCircles(makeRandomPoint(), hues[i]);
	}

	function makeRandomPoint(){
		var newRandomPoint = new Point.random();
		newRandomPoint.x = newRandomPoint.x * view.bounds.width;
		newRandomPoint.y = newRandomPoint.y * view.bounds.height;
		return newRandomPoint;
	}

	function drawCircles(point, hue){
		console.log('asdf');
		for (var i = 0; i < 20; i++) {
			var circle = new Path.Circle(
				{
					center: point,
					radius: 200 - (10*i),
					fillColor: randomColor({hue: hue}),
					strokeColor: 'white',
					shadowColor: randomColor({hue: hue}),
					shadowOffset: new Point(0,750),
					shadowBlur: 15,
				}
			)
		}
	}
}

