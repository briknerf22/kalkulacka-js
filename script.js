const display = document.getElementById('display');
const statsDiv = document.getElementById('stats');

// Inicializace statistik z localStorage nebo prázdného objektu
let stats = JSON.parse(localStorage.getItem('buttonStats')) || {};

function appendToDisplay(value) {
    display.value += value; // Přidá hodnotu na displej

    // Sledování statistik tlačítek
    if (!isNaN(value)) { // Sledujeme pouze číslice
        stats[value] = (stats[value] || 0) + 1;
        localStorage.setItem('buttonStats', JSON.stringify(stats));
        updateStatsDisplay();
    }
}

function clearDisplay() {
    display.value = ''; // Vymaže displej
}

function deleteLast() {
    display.value = display.value.slice(0, -1); // Odstraní poslední znak
}

function calculateResult() {
    try {
        const sanitizedExpression = display.value
            .replace('√', 'Math.sqrt')
            .replace('log', 'Math.log10')
            .replace('ln', 'Math.log'); // Ošetření pro další funkce
        display.value = eval(sanitizedExpression); // Vyhodnocení výrazu
    } catch (error) {
        display.value = 'Chyba'; // Pokud je výraz neplatný
    }
}

// Funkce pro aktualizaci zobrazení statistik
function updateStatsDisplay() {
    statsDiv.innerHTML = ''; // Vyprázdnění existujícího obsahu
    for (const [key, value] of Object.entries(stats)) {
        statsDiv.innerHTML += `<p>${key}: ${value}</p>`; // Zobrazení statistiky
    }
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    themeToggle.textContent = body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
});

// Načtení statistik při načtení stránky
updateStatsDisplay();