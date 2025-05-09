document.addEventListener('DOMContentLoaded', function(){
    const y = document.getElementById('y');
    const x = document.getElementById('x');
    const resultado = document.getElementById('resultado');
    const somar = document.getElementById('somar')


    somar.addEventListener('click', function() {
    const z = x+y //    parseFloat(x) + parseFloat(y)
       resultado.textContent(`${x} + ${y} = ${z}`);
    })

    document.getElementById('subtrair').addEventListener('click', function() {})


    document.getElementById('multiplicar').addEventListener('click', function() {})


    document.getElementById('dividir').addEventListener('click', function() {})

});