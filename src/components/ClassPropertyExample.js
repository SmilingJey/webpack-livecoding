export default class ClassPropertyExample {
  //Инициализация поля класса
  textMessage = "click on documnet";

  //Инициализация стрелочной функции в поле класса
  showMessage = () => {
    console.log(this);
    console.log(this.textMessage);
  };

  //навешивание обработчика
  setEventListeners() {
    document.addEventListener('click', this.showMessage)
  }
}
