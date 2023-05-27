let $ = document
const weightInput = $.querySelector('#weight')
const heightInput = $.querySelector('#height')
const weightVal = $.querySelector('#weight-val')
const heightVal = $.querySelector('#height-val')
const bmiResult = $.querySelector('#result')
const categoryElem = $.querySelector('#category')

function bmiCalculator () {
    // console.log('BMI');
    let weightInputValue = weightInput.value
    let heightInputValue = heightInput.value

    weightVal.innerHTML = weightInputValue
    heightVal.innerHTML = heightInputValue

    let bmiValue = (weightInputValue / (Math.pow(heightInputValue/100, 2))).toFixed(1)

    bmiResult.innerHTML = bmiValue

    if (bmiValue < 18.5) {
        categoryElem.innerHTML = 'UnderWeight'
        bmiResult.style.color = '#ffc44d'
        document.body.style.background = "linear-gradient(" + "135deg," + "#f4ff52," + "#f5b841" + ")"
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        categoryElem.innerHTML = 'Normal Weight'
        bmiResult.style.color = '#0be881'
        document.body.style.background = "linear-gradient(" + "135deg," + "#61d954," + "#2ebf75" + ")"
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
        categoryElem.innerHTML = 'OverWeight'
        bmiResult.style.color = '#ff884d'
        document.body.style.background = "linear-gradient(" + "135deg," + "#ef6429," + "#f74e15" + ")"
    } else {
        categoryElem.innerHTML = 'Obese'
        bmiResult.style.color = '#ff5e4d'
        document.body.style.background = "linear-gradient(" + "135deg," + "#BF1C1B," + "#B90504" + ")"
    }
}

weightInput.addEventListener('input', bmiCalculator)
heightInput.addEventListener('input', bmiCalculator)