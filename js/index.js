const accordionItems = document.querySelectorAll('.accordion .container');

accordionItems.forEach((item) => {
    const button = item.querySelector('.label');

    button.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        accordionItems.forEach((other) => {
            other.classList.remove('active');
            other.querySelector('.label').setAttribute('aria-expanded', 'false');
        });

        if (!isActive) {
            item.classList.add('active');
            button.setAttribute('aria-expanded', 'true');
        }
    });
});

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.navbar-components');

if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
        const isOpen = navLinks.classList.toggle('open');
        navToggle.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            navToggle.setAttribute('aria-expanded', 'false');
        });
    });
}