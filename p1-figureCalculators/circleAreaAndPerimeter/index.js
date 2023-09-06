let radius = document.getElementById("radius")
let area = document.getElementById("area")
let perimeter = document.getElementById("perimeter")
let button = document.getElementById("submit")

button.onclick = function () {
    perimeter.textContent = 2*3.14*(+radius.value)
    area.textContent = 3.14*(+radius.value)**2
}


