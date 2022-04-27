    // Variables

const botonEncriptar = document.getElementById('encriptar')
const botonDesencriptar = document.getElementById('desencriptar')
const btnCopy = document.querySelector('.btn')



    // Funciones

function encriptar(texto){
    let reemplazo = texto.replace(/e/g,'enter')
    let reemplazoDos = reemplazo.replace(/i/g,'imes')
    let reemplazoTres = reemplazoDos.replace(/a/g,'ai')
    let reemplazoCuatro = reemplazoTres.replace(/o/g,'ober')
    let reemplazoFinal = reemplazoCuatro.replace(/u/g,'ufat')
    return reemplazoFinal
}

function desencriptar(texto){
    let reemplazo = texto.replace(/imes/g,'i')
    let reemplazoDos = reemplazo.replace(/ai/g,'a')
    let reemplazoTres = reemplazoDos.replace(/enter/g,'e')
    let reemplazoCuatro = reemplazoTres.replace(/ober/g,'o')
    let reemplazoFinal = reemplazoCuatro.replace(/ufat/g,'u')
    return reemplazoFinal
}



    // Eventos

botonEncriptar.addEventListener('click',(e)=>{
    e.preventDefault()

    document.getElementById('resultado').value = encriptar(document.querySelector('textarea').value)
    btnCopy.classList.remove("none");
})

botonDesencriptar.addEventListener('click',(e)=>{
    e.preventDefault()

    document.getElementById('resultado').value = desencriptar(document.querySelector('textarea').value)
    btnCopy.classList.remove("none");
})

btnCopy.addEventListener('click',(e)=>{
    e.preventDefault()

    document.getElementById('resultado').select()
    const answer = document.getElementById('copyAnswer')

        // Copiando el texto seleccionado
        let successful = document.execCommand('copy');

})






