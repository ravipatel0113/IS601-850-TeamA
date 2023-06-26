const bodyClassList = document.body.classList;
const localStorageTheme = localStorage.getItem('themePreference');

// Navbar
const navbarToggler = document.getElementById('navbarToggler');
const navbarMenu = document.getElementById('navbarNav');

navbarToggler.addEventListener('change', () => {
    navbarMenu.classList.toggle('show');
});

// Theme switcher
const themeSwitch = document.getElementById('themeSwitch');

themeSwitch.addEventListener('change', () => {
    bodyClassList.toggle('dark-theme');
    localStorage.setItem('themePreference', bodyClassList.contains('dark-theme') ? 'dark' : 'light');
});

// User preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark || localStorageTheme === 'dark') {
    themeSwitch.checked = true;
    bodyClassList.add('dark-theme');
} else if (localStorageTheme === 'light') {
    themeSwitch.checked = false;
    bodyClassList.remove('dark-theme');
}

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    themeSwitch.checked = e.matches;
    if (e.matches) {
        bodyClassList.add('dark-theme');
    } else {
        bodyClassList.remove('dark-theme');
    }
});
