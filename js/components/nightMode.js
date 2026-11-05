const modeBtn = document.getElementById('mode');
const modeIcon = modeBtn.querySelector('.material-icons');

function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    modeIcon.textContent = theme === 'dark' ? 'light_mode' : 'dark_mode';
    modeBtn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
}

applyTheme(document.documentElement.getAttribute('data-theme') || 'light');

modeBtn.addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', next);
    applyTheme(next);
});