'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP_X = 50;
var GAP_Y = 10;
var FONT_GAP = 25;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP_Y * 2 - FONT_GAP * 4;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// Поиск максимального элемента

/*
var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};
*/

var getMaxElement = function (arr) {
  var maxElement = Math.max.apply(null, arr);

  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, 100, 10, '#ffffff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', 130, 26);
  ctx.fillText('Список результатов:', 130, 46);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barX = CLOUD_X + GAP_X + (GAP_X + BAR_WIDTH) * i;

    ctx.fillStyle = '#000000';

    ctx.fillText(Math.round(times[i]), barX, CLOUD_Y + FONT_GAP * 2 + GAP_Y + barHeight * (1 - times[i] / maxTime));

    ctx.fillText(players[i], barX, CLOUD_Y + FONT_GAP * 3 + barHeight + GAP_Y * 2);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240, ' + Math.random() * 100 + '%, 50%)';
    }

    ctx.fillRect(barX, CLOUD_Y + GAP_Y + FONT_GAP * 3 + barHeight, BAR_WIDTH, (-barHeight * times[i]) / maxTime);
  }
};
