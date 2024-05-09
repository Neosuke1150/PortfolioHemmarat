const navItems = document.querySelector('.menu-items');

navItems.addEventListener('click', (event) => {
    if (event.target.tagName === 'LI') {
        event.preventDefault();

        const id = event.target.getAttribute('id');
        const section = document.querySelector(`#${id}`);

        section.scrollIntoView({ behavior: 'smooth' });

        const navLinks = document.querySelectorAll('.menu-link');

        navLinks.forEach((link) => {
            link.classList.remove('active');
        });

        const currentLink = document.querySelector(`.menu-link#${id}`);
        currentLink.classList.add('active');
    }
});

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;

    const navLinks = document.querySelectorAll('.menu-link');
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - windowHeight / 2 && scrollPosition < sectionTop + sectionHeight - windowHeight / 2) {
            const id = section.getAttribute('id');
            const currentLink = document.querySelector(`.menu-link#${id}`);

            navLinks.forEach((link) => {
                link.classList.remove('active');
            });

            currentLink.classList.add('active');
        }
    });
});