const java = document.querySelector('body');


let valoresArr = [];


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
    titulo.innerText = 'CADASTRÃO';
    titulo.className = 'titulo-modal';


    modal.appendChild(titulo);


    let divNome = document.createElement('div');
    divNome.className = 'div-nome';
    

    let nomeInput = document.createElement('input');
    nomeInput.className = 'input-nome';
    nomeInput.placeholder = 'Insira seu nome';;
    

    divNome.appendChild(nomeInput);
    modal.appendChild(divNome);


    let divSobrenome = document.createElement('div');
    divSobrenome.className = 'div-nome';
    
    let sobrenomeInput = document.createElement('input');
    sobrenomeInput.className = 'input-sobrenome';
    sobrenomeInput.placeholder = 'Insira seu sobrenome';
    
    divSobrenome.appendChild(sobrenomeInput);
    modal.appendChild(divSobrenome);


    let divNasc = document.createElement('div');
    divNasc.className = 'div-nasc';
    
    let nascInput = document.createElement('input');
    nascInput.className = 'input-nasc';
    nascInput.placeholder = 'Insira seu nascimento';
    nascInput.type = 'date'
    
    divNasc.appendChild(nascInput);
    modal.appendChild(divNasc);

    let divBoToesInferior = document.createElement('div');
    divBoToesInferior.className = 'div-botoes-inferior';


    let enviar = document.createElement('button');
    enviar.className = 'botao-enviar';
    enviar.innerText = 'Cadastrar';

    modal.appendChild(enviar)

    divBoToesInferior.appendChild(enviar);

    let cancelar = document.createElement('button');
    cancelar.className = 'botao-cancelar';
    cancelar.innerText = 'Cancelar';
    
    divBoToesInferior.appendChild(cancelar);

    
    enviar.onclick = function(){
        if(nomeInput.value == '' || sobrenomeInput.value == '' || nascInput.value == ''){
            const divVermelha =  document.createElement('div');
            divVermelha.className = 'father-vermelha';


            const vermelha = document.createElement('div');
            vermelha.className = 'div-vermelha'
            vermelha.innerHTML = '<p>HÁ ALGUM CAMPO VAZIO</p>';
            vermelha.style.position = 'absolute';
            vermelha.style.bottom = 0;

            divVermelha.appendChild(vermelha);

            java.appendChild(divVermelha);

            let intervaloV = setTimeout(function(){
                vermelha.remove()
                
            },3000)
        }
        
        else if(nomeInput.value != '' && sobrenomeInput.value != '' && nascInput.value != ''){
            
            let tabela = document.createElement('table')
            tabela.className = 'tabela'
            
            java.appendChild(tabela)
            
            const divVerde = document.createElement('div');
            divVerde.className = 'father-verde';
            
            const verde = document.createElement('div');
            verde.className = 'div-verde';
            verde.innerHTML = '<p>CADASTRO CONCLUÍDO</p>';
            verde.style.position = 'absolute';
            verde.style.bottom = 0;
            
            divVerde.appendChild(verde);

            java.appendChild(divVerde);
            
            let intervalo = setTimeout(function(){
                containerModal.remove();
                
                java.style.backgroundColor = 'transparent';
                button.style.background = '#EFEFEF';
                button.style.outline = 'none';
            },1)

            let intervaloV2 = setTimeout(function(){
                verde.remove()
                
            },5000)

            
            let nome = document.querySelector('.input-nome')
            nomeValor = nome.value;
            console.log(nomeValor)


            let sobreNome = document.querySelector('.input-sobrenome')
            sobreNomeValor = sobreNome.value;
            console.log(sobreNomeValor)


            let nascimento = document.querySelector('.input-nasc')
            nascimentoValor = nascimento.value;
            console.log(nascimentoValor)

            let pessoa = {
                nome: nomeValor,
                sobrenome: sobreNomeValor,
                nascimento: nascimentoValor
            }

            valoresArr.push(pessoa);

        }
        
        
        
    }
    
    cancelar.onclick = function(){
        containerModal.remove();
        java.style.backgroundColor = 'transparent';
        button.style.background = '#EFEFEF';
        button.style.outline = 'none';

    }
    
    modal.appendChild(divBoToesInferior)
    
})

