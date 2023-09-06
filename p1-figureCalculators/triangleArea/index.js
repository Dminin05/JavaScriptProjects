let input1 = document.getElementById("input1")
let input2 = document.getElementById("input2")
let input3 = document.getElementById("input3")
let area = document.getElementById("area")
let button = document.getElementById("submit")

button.onclick = function () {

    let num1 = +input1.value
    let num2 = +input2.value
    let num3 = +input3.value
    let halfPerimeter = (num1 + num2 + num3) / 2
    let s = (halfPerimeter * (halfPerimeter - num1) * (halfPerimeter - num2) * (halfPerimeter - num3)) ** 0.5

    area.textContent = s
}


