'use strict';

(function () {

  var StatusCode = {
    OK: 200,
  };

  // Обработка возможных ошибок при загрузке: DOM-элемент, который будет показывать сообщения об ошибках, произошедших по ходу загрузки данных

  window.backend = {

    // Получение данных с сервера
    load: function (onLoad, onError) {
      var url = 'https://javascript.pages.academy/code-and-magick/data';
      var xhr = new XMLHttpRequest();

      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + '' + xhr.statusText);
        }
      });

      xhr.open('GET', url);
      xhr.send();
    },

    // Загрузка данных на сервер
    save: function (data, onLoad, onError) {
      // data - объект FormData, который содержит данные формы, которые будут отправлены на сервер
      var url = 'https://javascript.pages.academy/code-and-magick';
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.addEventListener('load', function () {
        if (xhr.status === StatusCode.OK) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + '' + xhr.statusText);
        }
      });

      xhr.open('POST', url);
      xhr.send(data);
    }
  };
})();
