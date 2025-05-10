document.addEventListener('DOMContentLoaded', function(){
    const senha1 = document.getElementById('senha');
    const resposta = document.getElementById('resposta');

    document.getElementById('validar').addEventListener('click', function() {
        if (senha1 === 8){
            resposta.textContent = 'A senha tem 8 caracteres!'
        }
    });
});