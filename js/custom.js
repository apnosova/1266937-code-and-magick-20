'use strict';

// Изменение цвета мантии, цвета глаз, цвета фаерболов персонажа по нажатию

(function () {
  var userDialog = document.querySelector('.setup');
  var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
  var fireball = document.querySelector('.setup-fireball-wrap');

  // Для того, чтобы на сервер отправились правильные данные, при изменении параметров персонажа должно изменяться и значение соответствующего скрытого тега <input>.

  wizardCoat.addEventListener('click', function () {
    var customColor = window.util.getRandomElementFromArr(window.data.WIZARD_COAT_COLORS);
    wizardCoat.style.fill = customColor;
    var wizardCoatInput = userDialog.querySelector('input[name="coat-color"]');
    wizardCoatInput.value = customColor;
  });

  wizardEyes.addEventListener('click', function () {
    var customColor = window.util.getRandomElementFromArr(window.data.WIZARD_EYE_COLORS);
    wizardEyes.style.fill = customColor;
    var wizardEyesInput = userDialog.querySelector('input[name="eyes-color"]');
    wizardEyesInput.value = customColor;
  });

  fireball.addEventListener('click', function () {
    var customColor = window.util.getRandomElementFromArr(window.data.FIREBALL_COLORS);
    fireball.style.background = customColor;
    var fireballInput = userDialog.querySelector('input[name="fireball-color"]');
    fireballInput.value = customColor;
  });
})();
