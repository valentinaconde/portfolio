let arrow = document.getElementById('arrow')
let arrow2 = document.getElementById('arrow2')

arrow.onclick = () => {
    arrow2.classList.remove('ocultar')
}

arrow2.onclick = () => {
    arrow2.classList.add('ocultar')
}