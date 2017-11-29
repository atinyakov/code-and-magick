'use strict';

window.renderStatistics = function (ctx, names, times) {
  // func drows canvas
  var drawRect = function (x, y, width, height, color) {
    ctx.fillStyle = color ? color : 'black';
    ctx.fillRect(x, y, width, height);
  };
  // drow canvas and shadow
  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270, '#FFFFFF');
  // funct to print text on canvas
  var drawText = function (text, x, y, color) {
    ctx.fillStyle = color ? color : 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(text, x, y);
  };
  // display text on canvas
  drawText('Ура вы победили!', 120, 40);
  drawText('Список результатов', 120, 60);
  // find max time for drowHistogram
  var maxTime;
  var getMaxTime = function (arr) {
    maxTime = arr[0];
    for (var i = 0; i <= arr.length; i++) {
      if (maxTime < arr[i]) {
        maxTime = arr[i];
      }
    }
  };
  getMaxTime(times);
  var opacity;
  var calcOpacity = function () {
    opacity = Math.random().toFixed(1);
    return opacity;
  };
  // drow time bars according to times array

  var drowHistogram = function (arr) {
    var HISTOGRAM_HEIGHT = 150; // px
    var COLUMN_WIDTH = 40; // px
    var COLUMN_SPACE = 50; // px
    var INITIAL_X = 160;
    var INITIAL_Y = 80;
    var OFFSET = 10; // px
    var step = HISTOGRAM_HEIGHT / (maxTime + 250);
    var PLAYER_COLOR = 'rgba(255, 0, 0, 1)';
    var RECORDS_COLOR = 'rgba(0, 0, 255,' + calcOpacity() + ')';

    for (var i = 0; i < arr.length; i++) {
      ctx.fillStyle = (names[i] === 'Вы') ? PLAYER_COLOR : RECORDS_COLOR;
      ctx.fillRect(INITIAL_X + i * (COLUMN_WIDTH + COLUMN_SPACE), INITIAL_Y + (HISTOGRAM_HEIGHT - arr[i] * step), COLUMN_WIDTH, arr[i] * step);
      var matchTime = Math.round(times[i]);
      ctx.fillStyle = '#000000';
      ctx.fillText(matchTime, INITIAL_X + i * (COLUMN_WIDTH + COLUMN_SPACE), INITIAL_Y - OFFSET + (HISTOGRAM_HEIGHT - arr[i] * step));
      ctx.fillText(names[i], INITIAL_X + i * (COLUMN_WIDTH + COLUMN_SPACE), INITIAL_Y + 2 * OFFSET + HISTOGRAM_HEIGHT);
    }
  };
  drowHistogram(times);
};
