const display = document.getElementById('display');

function appendValue(input) {
  if (display.innerText === '0') {
    display.innerText = input;
  } else {
    display.innerText += input;
  }
}

function clearDisplay() {
  display.innerText = '0';
}

function deleteLast() {
  display.innerText = display.innerText.slice(0, -1) || '0';
}

function calculate() {
  try {
    // eval() takes the string (e.g., "2+2") and computes it
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "Error";
  }
}