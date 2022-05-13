#shifumi

//SWITCH BUTTON COLOR//
let btn = document.getElementById('btnRed');
let alert = document.querySelector('.alert');

const changeColor = () => {
    alert.classList.toggle('alert-primary');
    alert.classList.toggle('alert-danger');
}
btn.addEventListener('click', changeColor);