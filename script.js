function saudar() {
    let frase = document.getElementById('frase')
    let genero = document.getElementById('generoSelect').value

    if (genero === "feminino") {
        frase.textContent = "Olá, moça"
        frase.style.color = "purple"
    } else if (genero === "masculino") {
        frase.textContent = "Olá, moço"
        frase.style.color = "blue"
    } else {
        frase.textContent = "erro!"
        frase.style.color = "red"
    }

}
