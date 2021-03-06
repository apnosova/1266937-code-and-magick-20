'use strict';

// функция возвращает случайный элемент массива

window.util = (function () {
  return {
    getRandomElementFromArr: function (arr) {
      var max = Math.floor(arr.length);
      var randomElement = arr[Math.floor(Math.random() * max)];

      return randomElement;
    },

    // Поиск максимального элемента
    getMaxElement: function (arr) {
      var maxElement = Math.max.apply(null, arr);

      return maxElement;
    },
  };
})();
