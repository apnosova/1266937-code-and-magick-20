'use strict';

// список похожих магов в окне настройки персонажа

window.similar = (function () {
// функция создания массива из случайных элементов
  var getWizardsArr = function () {
    var wizards = [];
    var MAX_WIZARDS = 4;
    for (var i = 0; i < MAX_WIZARDS; i++) {
      wizards.push({
        name: window.util.getRandomElementFromArr(window.data.WIZARD_FIRST_NAMES) + ' ' + window.util.getRandomElementFromArr(window.data.WIZARD_LAST_NAMES),
        coatColor: window.util.getRandomElementFromArr(window.data.WIZARD_COAT_COLORS),
        eyesColor: window.util.getRandomElementFromArr(window.data.WIZARD_EYE_COLORS)
      });
    }

    return wizards;
  };

  // функция создания DOM-элемента на основе JS-объекта
  var userDialog = document.querySelector('.setup');

  var renderWizard = function (wizard) {
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // функция заполнения блока DOM-элементами на основе массива JS-объектов
  var appendWizards = function () {
    var fragment = document.createDocumentFragment();
    var similarListElement = document.querySelector('.setup-similar-list');
    var wizards = getWizardsArr();

    for (var i = 0; i < wizards.length; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }

    similarListElement.appendChild(fragment);
  };

  // показать список похожих персонажей
  userDialog.querySelector('.setup-similar').classList.remove('hidden');

  appendWizards();
})();
