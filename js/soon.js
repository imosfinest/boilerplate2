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




//MAIL SUBSCRIPTION LIST 

const scriptURL = 'https://script.google.com/macros/s/AKfycbyuDCRiNzoFRLU0DdMqGZ_Iu9J2CytwP_GY3xHihdS62j-d3qG2318UpQiw6ENT5yZ7Sg/exec'
const form = document.forms['submit-to-google-sheet']
const mgs = document.getElementById("msg")
  

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)}).then(response => {
    msg.innerHTML="Thank you for subscribing" 
    setTimeout(function(){ 
        msg.innerHTML="" 
        },5000)
        form.reset()
    })
  
  
      .catch(error => console.error('Error!', error.message))
})

//form Validation 

// let emailField = document.getElementById('emailField');
// let emailError = document.getElementById('emailError');

// function validateEmail(){
//     if(emailField.ariaValueMax.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.])){

//     }
// }