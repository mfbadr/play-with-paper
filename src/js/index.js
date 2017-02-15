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

	view.onMouseDrag = function(e){
		var numberOfCircles = Math.floor(Math.random() * 10);
		var radius = Math.floor(Math.random() * 3) + 3;
		drawCircles(e.point, hues.randomElement(), numberOfCircles, radius);
	}

	function makeRandomPoint(){
		var newRandomPoint = new Point.random();
		newRandomPoint.x = newRandomPoint.x * view.bounds.width;
		newRandomPoint.y = newRandomPoint.y * view.bounds.height;
		return newRandomPoint;
	}

	function drawCircles(point, hue, numberOfCircles, radius){
		for (var i = 0; i < numberOfCircles; i++) {
			// point.y -= makeRandomPoint().y;
			// point.x += makeRandomPoint().x;
			// point.x -= Math.random()*i*3;
			var circle = new Path.Circle(
				{
					center: point,
					radius: (numberOfCircles * radius) - (radius*i),
					fillColor: randomColor({
							hue: hue,

						}),
					strokeColor: randomColor({hue: hue, luminocity: 'dark'}),
				}
			)
		}
	}
}

