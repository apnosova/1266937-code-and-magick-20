'use strict';

// список похожих магов в окне настройки персонажа

var WIZARD_FIRST_NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var WIZARD_LAST_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var WIZARD_COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var WIZARD_EYE_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [];
var MAX_WIZARDS = 4;

// показать окно настроек пользователя

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

// функция возвращает случайный элемент массива

var getRandomElementFromArr = function (arr) {
  var max = Math.floor(arr.length);
  var randomElement = arr[Math.floor(Math.random() * max)];

  return randomElement;
};

// функция создания массива из случайных элементов

var getWizardsArr = function () {
  for (var i = 0; i < MAX_WIZARDS; i++) {
    wizards.push({
      name: getRandomElementFromArr(WIZARD_FIRST_NAMES) + ' ' + getRandomElementFromArr(WIZARD_LAST_NAMES),
      coatColor: getRandomElementFromArr(WIZARD_COAT_COLORS),
      eyesColor: getRandomElementFromArr(WIZARD_EYE_COLORS)
    });
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
  wizards = getWizardsArr();

  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
};

// показать список похожих персонажей

userDialog.querySelector('.setup-similar').classList.remove('hidden');

appendWizards();


// Окно настройки персонажа с возможностью выбора цвета глаз, мантии и фаербола. С возможностью изменить юзерпик и имя персонажа

// Открытие/закрытие окна настройки персонажа

var setupOpen = document.querySelector('.setup-open');
var userNameInput = userDialog.querySelector('.setup-user-name');
var setupClose = userDialog.querySelector('.setup-close');

var userDialogEscPressHandler = function (evt) {
  if (userNameInput === document.activeElement) {
    return;
  } else if (evt.keyCode === 27) {
    evt.preventDefault();
    closeUserDialog();
  }
};

var openUserDialog = function () {
  userDialog.classList.remove('hidden');
  document.addEventListener('keydown', userDialogEscPressHandler);
};

var closeUserDialog = function () {
  userDialog.classList.add('hidden');
  document.removeEventListener('keydown', userDialogEscPressHandler);
};

setupOpen.addEventListener('click', function () {
  openUserDialog();
});

setupClose.addEventListener('click', function () {
  closeUserDialog();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 13) {
    openUserDialog();
  }
});

// Изменение цвета мантии, цвета глаз, цвета фаерболов персонажа по нажатию

var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');
var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

// Для того, чтобы на сервер отправились правильные данные, при изменении параметров персонажа должно изменяться и значение соответствующего скрытого тега <input>.

wizardCoat.addEventListener('click', function () {
  var customColor = getRandomElementFromArr(WIZARD_COAT_COLORS);
  wizardCoat.style.fill = customColor;
  var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
  wizardCoatInput.value = customColor;
});

wizardEyes.addEventListener('click', function () {
  var customColor = getRandomElementFromArr(WIZARD_EYE_COLORS);
  wizardEyes.style.fill = customColor;
  var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
  wizardEyesInput.value = customColor;
});

fireball.addEventListener('click', function () {
  var customColor = getRandomElementFromArr(FIREBALL_COLORS);
  fireball.style.background = customColor;
  var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
  fireballInput.value = customColor;
});
