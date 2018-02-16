import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
    this.events();
  }

  events() {
    //clicking the open modal openModalButton
    this.openModalButton.click(this.openModal.bind(this));//"bind"- it helps to use "this" keyword in our methods. else, they refer to event handler's and wont work without bind

    //clicking the X (close) modal Button
    this.closeModalButton.click(this.closeModal.bind(this));

    //pushes any keyword
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;//prevents default behaviour of scrolling on top of page.
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }

}

export default Modal;
