'use strict';

// Открытие/закрытие окна настройки персонажа

(function () {
  var userDialog = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var userNameInput = userDialog.querySelector('.setup-user-name');
  var setupClose = userDialog.querySelector('.setup-close');

  // В учебном проекте key не работает, только keyCode
  var userDialogEscPressHandler = function (evt) {
    var ESC_KEYCODE = 27;
    if (userNameInput === document.activeElement) {
      return;
    } else if (evt.keyCode === ESC_KEYCODE) {
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
    userDialog.style.left = 50 + '%';
    userDialog.style.top = 80 + 'px';
    document.removeEventListener('keydown', userDialogEscPressHandler);
  };

  setupOpen.addEventListener('click', function () {
    openUserDialog();
  });

  setupClose.addEventListener('click', function () {
    closeUserDialog();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    var ENTER_KEYCODE = 13;
    if (evt.keyCode === ENTER_KEYCODE) {
      openUserDialog();
    }
  });
})();
