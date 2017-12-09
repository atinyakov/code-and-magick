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
    setup.style.top = initStartCords.y + 'px';
    setup.style.left = initStartCords.x + '%';
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
  // draggable popup
  var dialogHandle = setup.querySelector('.upload');
  var initStartCords = {
    x: 50,
    y: 80
  };
  dialogHandle.addEventListener('mousedown', function (evt) {
    evt.preventDefault();
    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };
    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
