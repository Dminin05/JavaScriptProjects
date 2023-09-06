let width = document.getElementById("width")
let length = document.getElementById("length")
let area = document.getElementById("area")
let perimeter = document.getElementById("perimeter")
let button = document.getElementById("submit")

button.onclick = function () {
    perimeter.textContent = (+width.value)*2 + (+length.value)*2
    area.textContent = (+width.value)*(+length.value)
}


