let sections = document.querySelector('sections');
let navLinks = document.querySelector('header .navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top< offset + height) {
            navLinks.classList.remove('active');
            document.querySelector('header .navbar a [href*=' + id + ']').classList.add('active');
            
        }
    });
};
