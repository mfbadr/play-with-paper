'use strict';
// alert('foo');

import paper from '../../node_modules/paper/dist/paper-full.min.js';
import styles from '../css/style.css';

paper.install(window);
window.onload = function() {
  // Setup directly from canvas id:
  paper.setup('canvas');
  var path = new Path();
  path.strokeColor = 'white';
  var start = new Point(100, 100);
  path.moveTo(start);
  path.lineTo(start.add([ 200, -50 ]));
  view.draw();
}

