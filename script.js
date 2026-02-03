document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("themeToggle");

    // NEW DIRECT URLS
    const sunUrl = "https://raw.githubusercontent.com/kevinevason/kevinevason_website/main/sun.png";
    const moonUrl = "https://raw.githubusercontent.com/kevinevason/kevinevason_website/main/moon.png";

    function updateUI() {
        const isDark = body.classList.contains("dark-mode");
        themeIcon.src = isDark ? moonUrl : sunUrl;
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    updateUI();

    themeIcon.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        updateUI();
    });
});