// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Function to reset the background color
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const display = document.getElementById('keyPressDisplay')
  display.textContent = `Key pressed: ${event.key}`
}

// Function to display user input in real-time
function displayUserInput(event) {
  const input = document.getElementById('textInput')
  const display = document.getElementById('textInputDisplay')

  const value = event?.target?.value ?? input.value
  display.textContent = `You typed: ${value}`
}

// Attach Event Listeners
function setupEventListeners() {
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)

  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  document.addEventListener('keydown', displayKeyPress)

  document
    .getElementById('textInput')
    .addEventListener('input', displayUserInput)
}

// Initialize event listeners
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

// Export for Jest
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}
