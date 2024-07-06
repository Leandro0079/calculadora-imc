const botaoCalcular = document.querySelector('.botao-calcular');
botaoCalcular.onclick = calcular;

window.addEventListener('keydown', (Event) => {
    if(Event.key === 'Enter'){
        botaoCalcular.click()
    }
})



function calcular(){
    const peso = document.querySelector('.input-kg');
    const altura = document.querySelector('.input-metros');
    const imc = peso.value / (altura.value**2);
    const imcTag = document.querySelector('.resultado__num');
    imcTag.textContent = `imc: ${imc.toFixed(2)}`

    const imcTexto = document.querySelector('.resultado__texto');
    if (imc < 18.5) {
        imcTag.textContent = `você se encontra abaixo do peso`
    }
    
    else if (imc >= 18.5 && imc < 24.9) {
        imcTexto.textContent =`você se encontra com peso normal`
    }
    
    else if (imc >= 25 && imc < 29.9) {
    
        imcTexto.textContent =`você se encontra com sobrepeso`
    }
    
    else if (imc >= 30 && imc < 34.9) {
        imcTexto.textContent =` você se encontra com Obesidade Grau I`
    }
    
    else if (imc >= 35 && imc < 39.9) {
        imcTexto.textContent =`você se encontra com Obesidade Grau II severa`
    }
    
    else {
        imcTexto.textContent =` você se encontra com Obesidade Grau III mórbida`
    }
        

    
}



















