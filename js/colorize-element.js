'use strict';

(function () {
  window.colorizeElement = function (element, color, action) {
    action(element, color);
  };
})();
