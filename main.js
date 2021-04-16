'use strict';

const toggleButton = document.querySelector('.btn-menu');
const navbar = document.querySelector('.main-nav');
const elbody = document.body;

toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active')
    elbody.classList.toggle('active')
});

const modalContainer = document.querySelector('.modal-container');
const closeModal = document.querySelector('.close-modal');

let openModal = () => {
    modalContainer.classList.add('active');
    elbody.classList.add('active');
} 
    
closeModal.addEventListener('click', () => {
    modalContainer.classList.remove('active');
    elbody.classList.remove('active');
});