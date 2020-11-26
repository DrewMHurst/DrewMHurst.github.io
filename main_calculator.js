
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

//is this a number key?
if (key.classList.contains('number')){

  if (displayValue === '0'){
    display.textContent = keyValue

  } else {
    display.textContent = displayValue + keyValue
  }
}

//is this an operator key?
if (key.classList.contains('operator')){
  console.log(key)

  calculator.dataset.previousKeyType = 'operator'
}
})

////////// Testing Script //////////////
