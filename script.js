const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator__keys');
const display = calculator.querySelector('.calculator__display');

keys.addEventListener('click', e => {
  if (!e.target.closest('button')) return; // ignore clicks outside buttons

  const key = e.target;
  const action = key.dataset.action;
  const keyContent = key.textContent;
  const displayedNum = display.textContent;

  if (!action) {
    // Number key
    display.textContent =
      displayedNum === '0' ? keyContent : displayedNum + keyContent;
  }

  if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
      display.textContent += '.';
    }
  }

  if (action === 'clear') {
    display.textContent = '0';
  }

  if (action === 'add' || action === 'subtract' ||
      action === 'multiply' || action === 'divide') {
    display.textContent += ` ${keyContent} `;
  }

if (action === 'calculate') {
    try {
      // Replace symbols × ÷ with * /
    const expression = displayedNum.replace(/×/g, '*').replace(/÷/g, '/');
    display.textContent = eval(expression);
    } catch {
    display.textContent = 'Error';
    }
}
});
