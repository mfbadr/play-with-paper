'use strict';

var paper = require('paper');
var randomColor = require('randomcolor');
require ('../css/style.css')
paper.install(window);

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

window.onload = function() {
	paper.setup('canvas');

	var hues = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink', 'monochrome'];

	// for (var i = 0; i < hues.length; i++){
		// var maxPoint = new Point(view.bounds.width, view.bounds.height);
		// drawCircles(makeRandomPoint(), hues[i]);
	// }

	view.onClick = function(e){
		drawCircles(e.point, hues.randomElement());
	}

	function makeRandomPoint(){
		var newRandomPoint = new Point.random();
		newRandomPoint.x = newRandomPoint.x * view.bounds.width;
		newRandomPoint.y = newRandomPoint.y * view.bounds.height;
		return newRandomPoint;
	}

	function drawCircles(point, hue){
		for (var i = 0; i < 20; i++) {
			var circle = new Path.Circle(
				{
					center: point,
					radius: 100 - (5*i),
					fillColor: randomColor({hue: hue}),
					strokeColor: 'white',
					// shadowColor: randomColor({hue: hue}),
					// shadowOffset: new Point(0,250),
					// shadowBlur: 15,
				}
			)
		}
	}
}

