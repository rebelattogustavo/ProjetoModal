const java = document.querySelector('body');

let button = document.createElement('button');
button.className = 'button';
button.innerText = 'Cadastro';

let container = document.createElement('div');
container.className = 'container';

container.appendChild(button);

java.appendChild(container);

let containerModal = document.createElement('div');
containerModal.className = 'container-modal';



let modal = document.createElement('div');
modal.className = 'div-modal'

containerModal.appendChild(modal);

button.addEventListener('click', function(){
    java.appendChild(containerModal);
    java.style.backgroundColor = 'grey';
    button.style.backgroundColor = 'grey';
})

let titulo = document.createElement('p');
titulo.innerText = 'BASQUETE'
titulo.className = 'titulo-modal'

modal.appendChild(titulo);