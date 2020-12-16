//ONLY FOR DEMONSTARTION CLASS PROPERTIES
/*import ClassPropertyExample from '../components/ClassPropertyExample.js';
const example = new ClassPropertyExample();
example.setEventListeners();*/

// PROJECT CODE
import './index.css';
import {initialCards} from '../utils/constants.js';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';

const placesWrap = document.querySelector('.places__list');
const editFormModalWindow = document.querySelector('.popup_type_edit');
const cardFormModalWindow = document.querySelector('.popup_type_new-card');

const editFormButton = document.querySelector('.profile__edit-button');
const cardFormButton = document.querySelector('.profile__add-button');

const openModalWindow = (modalWindow) => {
  modalWindow.classList.add('popup_is-opened');
};

const closeModalWindow = (modalWindow) => {
  modalWindow.classList.remove('popup_is-opened');
};

const renderCard = (data, wrap) => {
  const card = new Card(data, '.card-template');
  wrap.appendChild(card.getView());
};

editFormButton.addEventListener('click', () => {
  openModalWindow(editFormModalWindow);
});

cardFormButton.addEventListener('click', () => {
  openModalWindow(cardFormModalWindow);
});

editFormModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__close')) {
    closeModalWindow(editFormModalWindow);
  }
});
cardFormModalWindow.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('popup__close')) {
    closeModalWindow(cardFormModalWindow);
  }
});

initialCards.forEach((data) => {
  renderCard(data, placesWrap)
});

const editFormValidator = new FormValidator({}, editFormModalWindow);
const cardFormValidator = new FormValidator({}, cardFormModalWindow);
editFormValidator.enableValidation();
cardFormValidator.enableValidation();
