 const btnHamburger = document.querySelector('#btnHamburger');
 const header = document.querySelector('.header');
 const overlay = document.querySelector('.overlay');

 btnHamburger.addEventListener('click', () => {
     console.log('open hamburger');

     if(header.classList.contains('open')){
        header.classList.remove('open')
        overlay.classList.remove('face-in');
        overlay.classList.add('face-out');
        
    } else {
        
        header.classList.add('open')
        overlay.classList.remove('face-out');
        overlay.classList.add('face-in');

     }
 });