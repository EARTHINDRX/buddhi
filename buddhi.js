const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

for (let i = 0; i < navLinks.length; i++) {
    const section = sections[i];
    const link = navLinks[i];

    link.addEventListener('click', (e) => {
        e.preventDefault();
        sections.forEach((section) => {
            section.classList.remove('active');
        });
        section.classList.add('active');
    });
}
document.getElementById('open-index-btn').addEventListener('click', () => {
    window.location.href = 'index.html';
});
document.getElementById('open-drx').addEventListener('click', () => {
    window.location.href = 'drx.html';
});