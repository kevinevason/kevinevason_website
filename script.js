document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("themeToggle");

    const sunUrl = "https://github.com/kevinevason/kevinevason_website/blob/main/sun.png?raw=true";
    const moonUrl = "https://github.com/kevinevason/kevinevason_website/blob/main/moon.png?raw=true";

    function updateUI() {
        const isDark = body.classList.contains("dark-mode");//hejewre
        
        // If dark mode is on, show moon. Otherwise, show sun.
        themeIcon.src = isDark ? moonUrl : sunUrl;
        
        // Update storage
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    // Initial check
    updateUI();

    // Toggle on click
    themeIcon.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        updateUI();
    });
});