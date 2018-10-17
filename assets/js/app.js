(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _dots = require('./modules/dots');

var _dots2 = _interopRequireDefault(_dots);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {
  'use strict';

  // When DOM is ready

  $(function () {
    _dots2.default.dotsEffect();
  });
})(jQuery); // You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

},{"./modules/dots":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// This is an examples of simple export.
//
// You can remove or add your own function in this file.

var DE = {
  dotsEffect: function dotsEffect() {
    var $cnt = $('#home-canvas'),
        cells = createCells();

    $cnt.html(cells);

    function createCells() {
      var width = 10,
          height = 10,
          size = width * height,
          html = '<div class="entry-cells">';

      for (var i = 0; i < size; i++) {
        html += '<div class="cell cell-' + i + '"></div>';
      }

      html += '</div>';

      return html;
    }
  }
};

exports.default = DE;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL21vZHVsZXMvZG90cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDS0E7Ozs7OztBQUVBLENBQUUsVUFBQyxDQUFELEVBQU87QUFDUDs7QUFFQTs7QUFDQSxJQUFFLFlBQU07QUFDTixtQkFBRyxVQUFIO0FBQ0QsR0FGRDtBQUlELENBUkQsRUFRRyxNQVJILEUsQ0FQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxLQUFLO0FBQ1AsY0FBWSxzQkFBVztBQUNyQixRQUFJLE9BQVEsRUFBRSxjQUFGLENBQVo7QUFBQSxRQUNJLFFBQVEsYUFEWjs7QUFHQSxTQUFLLElBQUwsQ0FBVSxLQUFWOztBQUVBLGFBQVMsV0FBVCxHQUF1QjtBQUNyQixVQUFJLFFBQVMsRUFBYjtBQUFBLFVBQ0ksU0FBUyxFQURiO0FBQUEsVUFFSSxPQUFTLFFBQVEsTUFGckI7QUFBQSxVQUdJLE9BQVMsMkJBSGI7O0FBS0EsV0FBSyxJQUFJLElBQUksQ0FBYixFQUFnQixJQUFJLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCO0FBQzdCLGdCQUFRLDJCQUEyQixDQUEzQixHQUErQixVQUF2QztBQUNEOztBQUVELGNBQVEsUUFBUjs7QUFFQSxhQUFPLElBQVA7QUFDRDtBQUNGO0FBckJNLENBQVQ7O2tCQXdCZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFlvdSBjYW4gd3JpdGUgYSBjYWxsIGFuZCBpbXBvcnQgeW91ciBmdW5jdGlvbnMgaW4gdGhpcyBmaWxlLlxuLy9cbi8vIFRoaXMgZmlsZSB3aWxsIGJlIGNvbXBpbGVkIGludG8gYXBwLmpzIGFuZCB3aWxsIG5vdCBiZSBtaW5pZmllZC5cbi8vIEZlZWwgZnJlZSB3aXRoIHVzaW5nIEVTNiBoZXJlLlxuXG5pbXBvcnQgREUgZnJvbSAnLi9tb2R1bGVzL2RvdHMnO1xuXG4oICgkKSA9PiB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBXaGVuIERPTSBpcyByZWFkeVxuICAkKCgpID0+IHtcbiAgICBERS5kb3RzRWZmZWN0KCk7XG4gIH0pO1xuXG59KShqUXVlcnkpOyIsIi8vIFRoaXMgaXMgYW4gZXhhbXBsZXMgb2Ygc2ltcGxlIGV4cG9ydC5cbi8vXG4vLyBZb3UgY2FuIHJlbW92ZSBvciBhZGQgeW91ciBvd24gZnVuY3Rpb24gaW4gdGhpcyBmaWxlLlxuXG52YXIgREUgPSB7XG4gIGRvdHNFZmZlY3Q6IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkY250ICA9ICQoJyNob21lLWNhbnZhcycpLFxuICAgICAgICBjZWxscyA9IGNyZWF0ZUNlbGxzKCk7XG5cbiAgICAkY250Lmh0bWwoY2VsbHMpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlQ2VsbHMoKSB7XG4gICAgICB2YXIgd2lkdGggID0gMTAsXG4gICAgICAgICAgaGVpZ2h0ID0gMTAsXG4gICAgICAgICAgc2l6ZSAgID0gd2lkdGggKiBoZWlnaHQsXG4gICAgICAgICAgaHRtbCAgID0gJzxkaXYgY2xhc3M9XCJlbnRyeS1jZWxsc1wiPic7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICAgIGh0bWwgKz0gJzxkaXYgY2xhc3M9XCJjZWxsIGNlbGwtJyArIGkgKyAnXCI+PC9kaXY+JztcbiAgICAgIH1cblxuICAgICAgaHRtbCArPSAnPC9kaXY+JztcblxuICAgICAgcmV0dXJuIGh0bWw7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBERTsiXX0=
