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
  var drowText = function (text, x, y, color) {
    ctx.fillStyle = color ? color : 'black';
    ctx.font = '16px PT Mono';
    ctx.fillText(text, x, y);
  };
  // display text on canvas
  drowText('Ура вы победили!', 120, 40);
  drowText('Список результатов', 120, 60);
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
  // drow time bars according to times arrayl
  var drowHistogram = function (arr) {
    var histogramHeight = 150; // px
    var columnWidth = 40; // px
    var columnSpace = 50; // px
    var initialX = 160;
    var initialY = 80;
    var offset = 10; // px
    var step = histogramHeight / (maxTime + 250);
    // Math.random() can return to low vaule so a bar can be slightly visible, this function will add 0.1 to the low value
    var opacity;
    var calcOpacity = function () {
      opacity = Math.random();
      // this does not work - return (opacity < 0.1) ? opacity += 0.1 : opacity;
      if (opacity < 0.1) {
        opacity = opacity + 0.1;
        return opacity;
      } else {
        return opacity;
      }
    };
    // drow bars and time
    for (var i = 0; i < arr.length; i++) {
      // ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + Math.random() + ')';
      ctx.fillStyle = (names[i] === 'Вы') ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255,' + calcOpacity() + ')';
      ctx.fillRect(initialX + i * (columnWidth + columnSpace), initialY + (histogramHeight - arr[i] * step), columnWidth, arr[i] * step);
      var matchTime = Math.round(times[i]);
      ctx.fillStyle = '#000000';
      ctx.fillText(matchTime, initialX + i * (columnWidth + columnSpace), initialY - offset + (histogramHeight - arr[i] * step));
    }
    // display name
    for (var j = 0; j < arr.length; j++) {
      ctx.fillStyle = '#000000';
      ctx.fillText(names[j], initialX + j * (columnWidth + columnSpace), initialY + 2 * offset + histogramHeight);
    }
  };
  drowHistogram(times);
};
