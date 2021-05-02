 const btnHamburger = document.querySelector('#btnHamburger');
 
 btnHamburger.addEventListener('click', () => {
     console.log('open hamburger');

     if(btnHamburger.classList.contains('open')){
     btnHamburger.classList.remove('open')

     } else {

         btnHamburger.classList.add('open')
     }
 });