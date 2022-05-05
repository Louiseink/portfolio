const scrollline = document.querySelector('.scroll-line');

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };

      window.addEventListener('scroll', fillscrollline);

let menu = document.querySelector('.smallmenu');
let menuButton = document.querySelector('.menuicon');

// menu.style.top = '30px';
menu.style.opacity = 0;
menu.style.zIndex = 100;

function showMenu() {
  let menuOpac = parseFloat(menu.style.opacity);
  
  setTimeout(function() {
    if (menuOpac === 0) {
      menu.style.transition = 'all .3s ease-in';
      menu.style.opacity = .9;
      
    } else {
      menu.style.transition = 'all .3s ease-in';
      menu.style.opacity = 0;
    }
  }, 1);
  
}

function hideMenu() {
  let menuOpac = parseFloat(menu.style.opacity);
  if (menuOpac != 0) {
    menu.style.transition = 'all .3s ease-in';
    menu.style.opacity = 0;
  }
}
document.addEventListener('click', hideMenu);
document.addEventListener('scroll', hideMenu);
menuButton.addEventListener('click', showMenu);

window.onload = function(){
  let el = document.querySelector('.whitescreen');
  el.style.opacity = 0;
  setTimeout(function(){
    el.style.display = 'none';
  },200);
}