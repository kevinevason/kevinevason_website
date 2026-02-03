document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeIcon = document.getElementById("themeToggle");

    // Direct links to bypass GitHub redirect issues
    const sunUrl = "https://raw.githubusercontent.com/kevinevason/kevinevason_website/main/sun.png";
    const moonUrl = "https://raw.githubusercontent.com/kevinevason/kevinevason_website/main/moon.png";

    function updateUI() {
        const isDark = body.classList.contains("dark-mode");
        
        // Swap the image: Dark Mode = Moon, Light Mode = Sun
        themeIcon.src = isDark ? moonUrl : sunUrl;
        
        // Save the setting
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }

    // Initialize on page load
    updateUI();

    // The icon itself is the button
    themeIcon.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        updateUI();
    });
});