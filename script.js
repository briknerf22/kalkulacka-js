let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const sanitizedExpression = display.value
            .replace('√', 'Math.sqrt')
            .replace('log', 'Math.log10')
            .replace('ln', 'Math.log'); // Replace additional functions
        display.value = eval(sanitizedExpression);
    } catch (error) {
        display.value = 'Chyba';
    }
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});