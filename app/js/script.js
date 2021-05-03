 const btnHamburger = document.querySelector('#btnHamburger');
 const header = document.querySelector('.header');
 const overlay = document.querySelector('.overlay');

 btnHamburger.addEventListener('click', () => {
     console.log('open hamburger');

     if(header.classList.contains('open')){
     header.classList.remove('open')

     } else {

        header.classList.add('open')
        overlay.classList.add('face-in');

     }
 });