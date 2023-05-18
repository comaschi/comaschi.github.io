let navBar= document.querySelector('.header .navbar');
let menuBtn =document.querySelector('#menu-btn');


menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}