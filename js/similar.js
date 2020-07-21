'use strict';

// список похожих магов в окне настройки персонажа

(function () {
  var MAX_WIZARDS = 4;

  // функция создания DOM-элемента на основе JS-объекта
  var userDialog = document.querySelector('.setup');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var similarListElement = document.querySelector('.setup-similar-list');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // функция заполнения блока DOM-элементами на основе массива JS-объектов
  var successHandler = function (wizards) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < MAX_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    // показать список похожих персонажей
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var element = document.createElement('div');
    element.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    element.style.position = 'absolute';
    element.style.left = 0;
    element.style.right = 0;
    element.style.fontSize = '30px';

    element.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', element);
  };

  window.backend.load(successHandler, errorHandler);

  var form = userDialog.querySelector('.setup-wizard-form');

  // Отменяет действие формы по умолчанию и отправляет данные на сервер, при успешной загрузке данных закрывает окно редактирования персонажа

  var submitHandler = function (evt) {
    window.backend.save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    });
    evt.preventDefault();
  };
  form.addEventListener('submit', submitHandler);
})();
