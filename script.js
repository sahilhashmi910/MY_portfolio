// Initialize AOS Animations
AOS.init({ duration: 1000, once: true });

// --- 1. SAFE GREETING LOGIC ---
const greetingElement = document.getElementById('greeting');
if (greetingElement) { // Only runs if the element exists on this page
    const hour = new Date().getHours();
    if (hour < 12) greetingElement.innerText = "Good Morning! I'm Sahil";
    else if (hour < 18) greetingElement.innerText = "Good Afternoon! I'm Sahil";
    else greetingElement.innerText = "Good Evening! I'm Sahil";
}

// --- 2. DARK MODE LOGIC ---
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (themeToggle) { // Safety check
    // Check LocalStorage when the page loads
    const currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.innerText = '☀️';
    }

    // The Click Event
    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
            themeToggle.innerText = '☀️';
        } else {
            localStorage.setItem('theme', 'light');
            themeToggle.innerText = '🌙';
        }
    });
}