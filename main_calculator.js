
////////// Testing Calculator //////////////
// const one = document.querySelector('.one')
// one.addEventListener('click', event => {
//  console.log("hello")
// })

//adding Event listeners to every button one by one would take up a lot of time//
//Instead, add event listener to the entire calculator keys div//

// const keys = document.querySelector('.calculator_keys')
// keys.addEventListener('click', event => {
//  console.log(event.target)
//
//  console.log(key.textContent)
// })

const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator_keys')
const display = calculator.querySelector('.calculator_display')

// For the const keys & display you can also make them equal to document as shwon below
//// const keys = document.querySelector('.calculator_keys')
//// const display = document.querySelector('.calculator_display')
// However since keys & display are children of calculator element in CSS,
// it's more appropiate to use calculator.querySelector because it will make the script load faster/improves the speed of loading.

keys.addEventListener('click', event => {

  if (!event.target.closest('button')) return

  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent
  const { type } = key.dataset
  const { previousKeyType } = calculator.dataset

//is this a number key?

if (type === 'number'){

  if (displayValue === '0'){
    display.textContent = keyValue

  } else if (previousKeyType === 'operator')
  {
    display.textContent = keyValue
  } else {
    display.textContent = displayValue + keyValue
  }

}

//is this an operator key?

if (type === 'operator'){
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
operatorKeys.forEach(el => {el.dataset.state = '' })
key.dataset.state = 'selected'

// Another way of doing the above is listed here
// const currentActiveOperator - calculator.querySelector('[data-state="selected"]')
// if (currentActiveOperator) {
//  currentActiveOperator.dataset.state = ''
// }

calculator.dataset.firstNumber = displayValue
calculator.dataset.operator = key.dataset.key

}


//perform a calculation
if (type === 'equal'){

const firstNumber = calculator.dataset.firstNumber
const operator = calculator.dataset.operator
const secondNumber = displayValue
//console.log(firstNumber, operator, secondNumber)
display.textContent = calculate(firstNumber, operator, secondNumber)

}

calculator.dataset.previousKeyType = type

})

function calculate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber)
  secondNumber = parseInt(secondNumber)
  let result = ''
   if (operator === 'plus') return firstNumber + secondNumber
   if (operator === 'minus') return firstNumber - secondNumber
   if (operator === 'times') return firstNumber * secondNumber
   if (operator === 'divide') return firstNumber / secondNumber
  //console.log(result)


//for a switch statement
// switch (operator) {
//  case 'plus': result = firstNumber + secondNumber; break
//  case 'minus': result = firstNumber - secondNumber; break
//  case 'times': result = firstNumber * secondNumber; break
//  case 'divide': result = firstNumber / secondNumber; break
//  }

return result.toFixed(2)
//.toFixed(2) can be used to have rounding for switch
}
