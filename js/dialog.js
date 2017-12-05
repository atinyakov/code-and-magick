'use strict';
(function () {
// open/close form
  var setupOpen = document.querySelector('.setup-open');
  var setup = document.querySelector('.setup');
  var nameBox = setup.querySelector('.setup-user-name');
  var setupClose = setup.querySelector('.setup-close');
  var setupSubmit = setup.querySelector('.setup-submit');
  setupClose.tabIndex = 1;
  setupOpen.tabIndex = 1;

  var onPopupPressEsc = function (evt) {
    window.util.isEscKeyCode(evt, closePopup, nameBox);
  };

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupPressEsc);
  };
  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupPressEsc);
  };
  // open form on click
  setupOpen.addEventListener('click', function () {
    openPopup();
  });
  // open form by pressing enter
  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterKeyCode(evt, openPopup);
  });
  // close form on clicl
  setupClose.addEventListener('click', function () {
    closePopup();
  });
  // close form on pressing enter
  setupClose.addEventListener('keydown', function (evt) {
    window.util.isEnterKeyCode(evt, closePopup);
  });

  setupSubmit.addEventListener('click', function () {
    closePopup();
  });
  setupSubmit.addEventListener('keydown', function (evt) {
    window.util.isEnterKeyCode(evt, closePopup);
  });
})();
