'use strict';
var removeClass = document.querySelector('.setup');
removeClass.classList.remove('hidden');

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
var WIZARD_AMOUNT = 4;
var randomInteger = function (min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
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

var createSimilarWizard = function (i) {
  var newWizard = wizard.cloneNode(true);
  newWizard.querySelector('.setup-similar-label').textContent = wizardsList[i].name;
  newWizard.querySelector('.wizard-coat').style.fill = wizardsList[i].coatColor;
  newWizard.querySelector('.wizard-eyes').style.fill = wizardsList[i].eyesColor;
  return newWizard;
};

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
