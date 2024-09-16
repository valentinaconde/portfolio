let arrow = document.getElementById('arrow')
let arrowVolver = document.getElementById('arrowVolver')

arrow.onclick = () => {
    arrowVolver.classList.remove('ocultar')
}

arrowVolver.onclick = () => {
    arrowVolver.classList.add('ocultar')
}