'use strict';

var WIZARD_FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

// показать окно настроек пользователя

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;

  // Максимум не включается, минимум включается
}

// функция генерации случайных данных

var getWizardsArr = function (firstNames, lastNames, coatColors, eyeColors) {
  var wizards = [];

  for (var i = 0; i < 4; i++) {
    wizards[i] = {};

    firstNames = WIZARD_FIRST_NAMES[getRandomInt(0, WIZARD_FIRST_NAMES.length)];

    lastNames = WIZARD_LAST_NAMES[getRandomInt(0, WIZARD_LAST_NAMES.length)];

    coatColors = WIZARD_COAT_COLORS[getRandomInt(0, WIZARD_COAT_COLORS.length)];

    eyeColors = WIZARD_EYE_COLORS[getRandomInt(0, WIZARD_EYE_COLORS.length)];

    wizards[i].name = firstNames + ' ' + lastNames;

    wizards[i].coatColors = coatColors;

    wizards[i].eyeColors = eyeColors;

    wizards[i] = {name: wizards[i].name, coatColor: wizards[i].coatColors, eyesColor: wizards[i].eyeColors};
  }

  return wizards;
};

// функция создания DOM-элемента на основе JS-объекта

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;

  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

// функция заполнения блока DOM-элементами на основе массива JS-объектов

var appendWizards = function () {
  var fragment = document.createDocumentFragment();
  var wizards = getWizardsArr();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

// показать список похожих персонажей

userDialog.querySelector('.setup-similar').classList.remove('hidden');

appendWizards();

