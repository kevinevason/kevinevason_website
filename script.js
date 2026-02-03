document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("themeToggle");

    // Use raw.githubusercontent.com for direct file access
    const sunUrl = "https://raw.githubusercontent.com/kevinevason/kevinevason_website/main/sun.png";
    const moonUrl = "https://raw.githubusercontent.com/kevinevason/kevinevason_website/main/moon.png";

    function updateUI() {
        const isDark = body.classList.contains("dark-mode");
        // Update the image source
        themeIcon.src = isDark ? moonUrl : sunUrl;
        // Save the preference
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    // Run once on load to set correct initial image
    updateUI();

    themeIcon.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        updateUI();
    });
});