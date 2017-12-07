'use strict';
(function () {
  var NAME_LIST = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAME_LIST = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT_COLOR = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLOR = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLOR = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var WIZARD_AMOUNT = 4;

  var randomInteger = function (min, max) {
    var rand;
    rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  };

  var wizardTemplate = function () {
    var template = {
      name: NAME_LIST[randomInteger(0, NAME_LIST.length - 1)] + ' ' + SURNAME_LIST[randomInteger(0, SURNAME_LIST.length - 1)],
      coatColor: COAT_COLOR[randomInteger(0, COAT_COLOR.length - 1)],
      eyesColor: EYES_COLOR[randomInteger(0, EYES_COLOR.length - 1)]
    };
    return template;
  };

  var wizardsList = [];
  var generateWizards = function () {
    for (var i = 0; i <= WIZARD_AMOUNT; i++) {
      wizardsList.push(wizardTemplate());
    }
  };
  generateWizards();
  // get wizard template
  var wizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var insertFragementHere = document.querySelector('.setup-similar-list');
  // creates wizards
  var createSimilarWizard = function (i) {
    var newWizard = wizard.cloneNode(true);
    newWizard.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
    newWizard.querySelector('.wizard-coat').style.fill = wizardsList[i].coatColor;
    newWizard.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyesColor;
    return newWizard;
  };
  // adding wizar
  var addWizards = function () {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i <= WIZARD_AMOUNT; i++) {
      fragment.appendChild(createSimilarWizard(i));
    }
    insertFragementHere.appendChild(fragment);
  };
  addWizards();

  var removeClassHide = function () {
    var removeClassHidden = document.querySelector('.setup-similar');
    removeClassHidden.classList.remove('hidden');
  };

  removeClassHide();

  // change eyes color on click
  var wizardOnPopup = document.querySelector('.setup-wizard');
  var eyes = wizardOnPopup.querySelector('.wizard-eyes');
  eyes.addEventListener('click', function () {
    eyes.style.fill = EYES_COLOR[randomInteger(0, EYES_COLOR.length - 1)];
  });
  // change coat color on click
  var coat = wizardOnPopup.querySelector('.wizard-coat');
  coat.addEventListener('click', function () {
    coat.style.fill = COAT_COLOR[randomInteger(0, COAT_COLOR.length - 1)];
  });
  // change fireball's color on click

  var fireball = document.querySelector('.setup-fireball-wrap');
  fireball.addEventListener('click', function () {
    fireball.style.background = FIREBALL_COLOR[randomInteger(0, FIREBALL_COLOR.length - 1)];
  });
})();
