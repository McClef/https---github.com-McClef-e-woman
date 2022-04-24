// Copyright Year

const yearSpan = document.querySelector('#currentYear')

const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();

// Modal Script

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})



