document.addEventListener('DOMContentLoaded', function(){
    const y = document.getElementById('y');
    const x = document.getElementById('x');
    const resultado = document.getElementById('resultado');
    


    document.getElementById('somar').addEventListener('click', function() {
        const z = parseInt(x.value) + parseInt(y.value);
        resultado.textContent = `${x.value} + ${y.value} = ${z}`;
    });

    document.getElementById('subtrair').addEventListener('click', function() {
        const z = parseInt(x.value) - parseInt(y.value);
        resultado.textContent = `${x.value} - ${y.value} = ${z}`;
    });


    document.getElementById('multiplicar').addEventListener('click', function() {
        const z = parseInt(x.value) * parseInt(y.value);
        resultado.textContent = `${x.value} x ${y.value} = ${z}`;
    });


    document.getElementById('dividir').addEventListener('click', function() {
        const z = parseInt(x.value) / parseInt(y.value);
        resultado.textContent = `${x.value} % ${y.value} = ${z}`;
    });

});