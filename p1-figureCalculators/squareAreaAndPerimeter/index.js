let input = document.getElementById("input")
let area = document.getElementById("area")
let perimeter = document.getElementById("perimeter")
let button = document.getElementById("submit")

button.onclick = function () {
    perimeter.textContent = (+input.value)*4
    area.textContent = (+input.value)**2
}


