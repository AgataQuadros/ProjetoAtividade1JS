document.addEventListener('DOMContentLoaded', function(){
    const numero = document.getElementById('numero')
    const resultado = document.getElementById('resultado')
    const limpar = () => resultado.innerHTML = '';
    const addItem = texto => {

        const li = document.createElement('li');

        li.textContent = texto;

        resultado.appendChild(li);
    };

    document.getElementById('multiplicar').addEventListener('click', function() {
    limpar();
    let i = 1;

    while (i <= 10) {
        const tabuada = parseInt(numero.value) * +i
        addItem(`${numero.value} x ${+i} = ${tabuada}`); 
        i++;
    }
    });
});