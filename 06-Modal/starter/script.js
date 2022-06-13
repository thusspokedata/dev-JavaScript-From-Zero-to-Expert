'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

// for(let i = 0; i < btnsOpenModal.length; i++) console.log(btnsOpenModal[i].textContent) // Show modal 1, Show modal 2, Show modal 3

const closeModal = function() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

const openModal = function() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

for(let i = 0; i < btnsOpenModal.length; i++) 
  btnsOpenModal[i].addEventListener('click', openModal);
  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);
  
document.addEventListener('keydown', function(e) { //keypress
  // console.log(e.key)

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  // una forma mas larga: ///////////
  // if (e.key === 'Escape') {
  //   if(!modal.classList.contains('hidden')) {
  //     closeModal();
  //   }
  // }
});