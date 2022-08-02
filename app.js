const hamburgerContainer = document.querySelector('#mainNav');
const hamburger = document.querySelector('.mainHamburger');
const links = document.querySelectorAll('.mainLinks li');

hamburger.addEventListener("click", () => {
    hamburgerContainer.classList.toggle("clicked");
    links.forEach((link) =>  {
        link.classList.toggle('fade');
    });
})