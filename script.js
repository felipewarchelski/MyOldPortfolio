// Scroll

window.onscroll = () => {
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);
}

//Scroll Reveal - Elements
ScrollReveal().reveal('.img-ep');
ScrollReveal().reveal('.about-div');
ScrollReveal().reveal('.heading');
