button = document.getElementById('burger')
nav = document.getElementById('nav')

button.onclick = function () {
    nav.classList.toggle('open')
}