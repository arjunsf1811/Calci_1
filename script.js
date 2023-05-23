// Get the display element
const display = document.getElementById('display');

// Function to append characters to the display
function appendCharacter(character) {
  display.value += character;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to delete the last character from the display
function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}

// Function to calculate the expression in the display
function calculate() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = 'Error';
  }
}
