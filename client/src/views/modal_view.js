const ModalView = function (container){
  this.container = container
}

ModalView.prototype.bindEvents = function () {


// Get the modal
const modal = document.getElementById('myModal');


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal

  modal.style.display = "block";


// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
};
module.exports = ModalView;
