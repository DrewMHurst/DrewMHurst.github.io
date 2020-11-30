
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
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')

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

if (type === 'number') {

  if (
    displayValue === '0' ||
    previousKeyType === 'operator'
  ) {
    display.textContent = keyValue
  } else {
    display.textContent = displayValue + keyValue
  }
}

//is this an operator key?

if (type === 'operator') {

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
if (type === 'equal') {

const firstNumber = calculator.dataset.firstNumber
const operator = calculator.dataset.operator
const secondNumber = displayValue
//console.log(firstNumber, operator, secondNumber)
display.textContent = calculate(firstNumber, operator, secondNumber)

}

if (type === 'clear') {
display.textContent = '0'
delete calculator.dataset.firstNumber
delete calculator.dataset.operator
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

//return result.toFixed(2)
//.toFixed(2) can be used to have rounding for switch
}

//==============================
///Testing Calculator
//==============================

//console.assert() a method writes an error message to the console if the assertion is false.
//If the assertion is true, nothing happens.

// console.assert(1 !== 1, 'one is not one') web console should say: Assertion failed: one is one main_calculator.js:116:9
function clearCalculator () {
// press the clear key
const clearKey = document.querySelector('[data-type="clear"]')
clearKey.click()

// Clear operator states
 operatorKeys.forEach(key => { key.dataset.state = '' })
}

function testClearKey () {
  clearCalculator()
  console.assert(display.textContent === '0', 'Clear key. Display should be 0')
  console.assert(!calculator.dataset.firstNumber, 'Clear key. No number remains')
  console.assert(!calculator.dataset.operator, 'Clear key. No operator remains')
}

const one = document.querySelector('[data-key="1"]')
const five = document.querySelector('[data-key="5"]')
const nine = document.querySelector('[data-key="9"]')

function testKeySequence (test) {
//const array = [...keys]
// Press keys
// array.forEach(key => {
  test.keys.forEach(key => {
// Press one keys
// `` vs ''
  document.querySelector(`[data-key="${key}"]`).click()

  })

// Assertion
// 1. Value to assert
// 2. Test message
console.assert(display.textContent === test.value, test.message)

// Clear calculation
clearCalculator()
testClearKey()
}

const tests = [{
  keys: ['1'],
  value: '1',
  message: 'Click 1'
}, {
  keys: ['1', '5'],
  value: '15',
  message: 'Click 15'
}, {
  keys: ['1', '5', '9'],
  value: '159',
  message: 'Click 159'
}, {
  keys: ['2', '4', 'plus', '7', 'equal'],
  value: '31',
  message: 'Calculation with plus'
}, {
  keys: ['3', 'minus', '7', '0', 'equal'],
  value: '-67',
  message: 'Calculation with minus'
}, {
  keys: ['1', '5', 'times', '9', 'equal'],
  value: '135',
  message: 'Calculation with times'
}, {
  keys: ['9', 'divide', '3', 'equal'],
  value: '3',
  message: 'Calculation with divide'
}, {
  keys: ['9', 'divide', '0', 'equal'],
  value: 'Infinity',
  message: 'Calculation. Divide by 0'
}]
// testKeySequence('1', '5', '9')
tests.forEach(testKeySequence)
