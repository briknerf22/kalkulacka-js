let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value; // Přidá hodnotu na displej
}

function clearDisplay() {
    display.value = ''; // Vymaže displej
}

function calculateResult() {
    try {
        display.value = eval(display.value); // Vypočítá výraz na displeji
    } catch (error) {
        display.value = 'Chyba'; // Pokud je výraz neplatný
    }
}

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Přepnutí mezi dark a white mode

    // Změna textu tlačítka
    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️ Light Mode';
    } else {
        themeToggle.textContent = '🌙 Dark Mode';
    }
});