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
  let menuOpac = parseInt(menu.style.opacity);
  if (menuOpac < 100) {
    menu.style.transition = 'all .3s ease-in';
    menu.style.opacity = 100;
    
  } else {
    menu.style.transition = 'all .3s ease-in';
    menu.style.opacity = 0;
  }
}

function hideMenu() {
  let menuOpac = parseInt(menu.style.opacity);
  if (menuOpac > 1) {
    menu.style.transition = 'all .3s ease-in';
    menu.style.opacity = 0;
  }
}

menuButton.addEventListener('click', showMenu);
document.addEventListener('mousedown', hideMenu);