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

	var hues = [
		'red',
		'orange',
		// 'yellow',
		'green',
		'blue',
		'purple',
		'pink'
		];
	var primaryHue = hues.randomElement();
	var allRectangles = new Group();
	var growingRectangles = new Group();
	var allCircles = new Group();

	var drawRectangles;

	view.onMouseDrag = function(e){
		drawCircles(e.point, primaryHue);

		if(allCircles.children.length){
		    allCircles.position.x -= e.delta.x * .05;
		}

	}


	view.onMouseDown = function(e){
		rainLines(e, hues.randomElement());
	}
	view.onMouseUp = function(e){
		clearInterval(drawRectangles);
	}

	function rainLines(event, hue){

		// if(allRectangles.children.length < 100){
			drawRectangles = setInterval (function(){
				var lineWidth = Math.floor(Math.random() * 500);
				var lineColor = randomColor({
					hue: primaryHue,
				});

				var rectangle = new Path.Rectangle({
						point: [ makeRandomPoint().x,0 ],
						size: [lineWidth, 2],
						strokeColor: lineColor,
						fillColor: lineColor
				});
				rectangle.onMouseEnter = function(e){
					this.remove();
				}

				allRectangles.addChild(rectangle);
				if(allRectangles.children.length > 100){
					allRectangles.firstChild.remove();
				}
			}, 500)
		// }
	}

	function makeRandomPoint(){
		var newRandomPoint = new Point.random();
		newRandomPoint.x = newRandomPoint.x * view.bounds.width;
		newRandomPoint.y = newRandomPoint.y * view.bounds.height;
		return newRandomPoint;
	}

	function drawCircles(point, hue){
		// var numberOfCircles = 5;
		var radius = Math.floor(Math.random()*5) + 1;
		var numberOfCircles = Math.floor(Math.random()*5) + 1;
		for (var i = 0; i < numberOfCircles; i++) {

			if(i > 0){
				if(point.x > view.center.x){
					point.x -= (point.x - view.center.x)/2;
				} else {
					point.x -= (point.x - view.center.x)/2;
				}
				if(point.y > view.center.y){
					point.y -= (point.y - view.center.y)/2;
				} else {
					point.y -= (point.y - view.center.y)/2;
				}
			}
			var circle = new Path.Circle(
				{
					center: makeRandomPoint(),
					// radius: (numberOfCircless) - (radius*i),
					radius: radius - (i* 3),
					fillColor: randomColor({
							hue: hue,
							luminocity: 'dark'

						}),
					strokeColor: randomColor({hue:'monochrome'}),
				}
			)


			circle.onMouseEnter = function(e){
				this.remove();
			}
			allCircles.addChild(circle);
		}
	}

	view.onFrame = function(e) {
		if(!allRectangles.isEmpty()){
			for (var i = allRectangles.children.length - 1; i >= 0; i--) {
				var curRectangle = allRectangles.children[i];
				if( (curRectangle.bounds._height/2) > view.bounds.height){
					continue;
				} else if((curRectangle.bounds._height*4) > view.bounds.height){
					curRectangle.scale(.995,1.02);
				} else {
					curRectangle.scale(1,1.02);
				}
			}
		}

		if(!allCircles.isEmpty()){
			allCircles.children.randomElement().remove();
			if(!allCircles.isEmpty()){
				allCircles.children.randomElement().remove();
			}
			// allCircles.children.randomElement().shado;
			// allCircles.scale(.995);
			// allCircles.scale(1.005);
			allCircles.position.y -= 3;
		}
	}
}

