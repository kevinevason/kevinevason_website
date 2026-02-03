document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("themeToggle");

    // Using the raw GitHub URLs
    const sunUrl = "https://github.com/kevinevason/kevinevason_website/blob/main/sun.png?raw=true";
    const moonUrl = "https://github.com/kevinevason/kevinevason_website/blob/main/moon.png?raw=true";

    function updateUI() {
        const isDark = body.classList.contains("dark-mode");
        
        // Swap the image based on the mode
        themeIcon.src = isDark ? moonUrl : sunUrl;
        
        // Update LocalStorage so it remembers your choice
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    // Initialize the page on load
    updateUI();

    // Toggle logic when clicking the icon
    themeIcon.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        updateUI();
    });
});