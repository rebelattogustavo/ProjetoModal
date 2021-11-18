const java = document.querySelector('body');

let button = document.createElement('button');
button.className = 'button';
button.innerText = 'Cadastro';

let container = document.createElement('div');
container.className = 'container';

container.appendChild(button);

java.appendChild(container);


button.addEventListener('click', function(){
    //Criando a div do modal
    let containerModal = document.createElement('div');
    containerModal.className = 'container-modal';

    //Criando o modal
    let modal = document.createElement('div');
    modal.className = 'div-modal'
    
    //Add o modal na div
    containerModal.appendChild(modal);

    //Add a div no body
    java.appendChild(containerModal);

    java.style.backgroundColor = 'grey';
    button.style.backgroundColor = 'grey';

    let titulo = document.createElement('h2');
    titulo.innerText = 'Titulo'
    titulo.className = 'titulo-modal'

    let nome = document.createElement('input')
    nome.className = 'input-name'
    nome.placeholder = 'Insira seu nome'
    
    modal.appendChild(titulo);
})

