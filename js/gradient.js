// Modo estrito
"use strict"

// Elementos
const directions = document.querySelectorAll(".directions i")
const firstColor = document.getElementById("first-color")
const secondColor = document.getElementById("second-color")
const textarea = document.getElementById("textarea")
const buttonGenerate = document.getElementById("button-generate")
const output = document.getElementById("textarea")
const buttonCopy = document.getElementById("button-copy")
let direction = "to right"
let gradient = ""

// Adicionando evento
directions.forEach(item => {
    item.addEventListener("click", function(){
        document.querySelector(".active").classList.remove("active")
        item.classList.add("active")
        direction = item.getAttribute("data-direction")
    })
})

// Gerar gradiente
function generateGradient() {
    gradient = `linear-gradient(${direction}, ${firstColor.value}, ${secondColor.value})`
    document.body.style.backgroundImage = gradient
    output.value = gradient
}

// Copiar código gradiente
function copyCode() {
    navigator.clipboard.writeText(gradient)
    window.alert("Código copiado com sucesso!")
}

// Esconder botão copiar
function hiddenButtonCopy() {
    if(!output.value) {
        buttonCopy.style.display = "none"
    }
    else {
        buttonCopy.style.display = "inline-block"
    }
}
hiddenButtonCopy()

// Adicionando evento e atribuindo função
buttonGenerate.addEventListener("click", function() {
    generateGradient()
    hiddenButtonCopy()
})
buttonCopy.addEventListener("click", copyCode)