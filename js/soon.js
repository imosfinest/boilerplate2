const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    //Button Toggle function
    burger.addEventListener('click', () =>{
        nav.classList.toggle('nav-active');
        nav.classList.toggle('show');
        //Animating nav-links in-out Function
        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
//Burger Animation
        burger.classList.toggle('toggle')
    });
}
navSlide();
