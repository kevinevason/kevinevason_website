const themeToggle = document.getElementById('themeToggle');
const statusBtn = document.getElementById('statusBtn');
const body = document.body;

function updateStyles() {
    const isLight = body.classList.contains('light-mode');
    if (isLight) {
        statusBtn.innerText = "DARK MODE";
        statusBtn.style.background = "#ffffff";
        statusBtn.style.color = "#000000";
    } else {
        statusBtn.innerText = "LIGHT MODE";
        statusBtn.style.background = "#000000";
        statusBtn.style.color = "#ffffff";
    }
}

updateStyles();

[themeToggle, statusBtn].forEach(el => {
    el.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        const mode = body.classList.contains('light-mode') ? 'light' : 'dark';
        localStorage.setItem('theme', mode);
        updateStyles();
    });
});