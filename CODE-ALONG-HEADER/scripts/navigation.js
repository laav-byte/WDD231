//Store the selected elements that we are going to use.
const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#ham-bar');
//const navBar = document.querySelector('#nav-bar');


//Toggle the show class off and on
navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
    //navBar.classList.toggle('show');
});