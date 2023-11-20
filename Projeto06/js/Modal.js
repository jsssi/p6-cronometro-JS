const modal = {
  modalAlert : document.querySelector('.modal-alert-timeFocus'),
 close(){
   modal.modalAlert.classList.add('hide')
 },
 open(){
   modal.modalAlert.classList.remove('hide')
 }
}
export default modal;