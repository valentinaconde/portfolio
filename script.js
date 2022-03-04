
let arrow1 = document.getElementById('arrow1')
let arrow3 = document.getElementById('arrow3')

let seccionDos = document.getElementById('seccionDos')
let seccionTres = document.getElementById('seccionTres')
let seccionCuatro = document.getElementById('seccionCuatro')
let proyecto = document.getElementsByClassName('proyecto')

arrow1.onclick = (e) => {
    seccionDos.classList.remove('ocultar')
    proyecto.classList.remove('d-none')
    seccionTres.classList.remove('ocultar')
    seccionCuatro.classList.remove('ocultar')
    arrow3.classList.remove('ocultar')
}


arrow3.onclick = (e) => {
    console.log('listo')
    arrow3.classList.add('ocultar')
}

