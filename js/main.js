function changeSize() {
    box = document.getElementsByClassName('box')[0];
    box.style.width = '80%';
    box.style.height = '80%';
}
function eliminar() {
    box = document.getElementsByClassName('box')[0];
    box.style.width = '20%';
    box.style.height = '20%';
}
const btn = document.getElementById("nojoda");
const btn2 = document.getElementById("buttons")
btn.addEventListener('click', changeSize);
btn2.addEventListener('click', eliminar);
