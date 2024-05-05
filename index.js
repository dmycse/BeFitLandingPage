function handleBars() {

  let menu = document.getElementById('menu');
  let bars = document.getElementById('bars');
  let links = document.querySelectorAll('.header__nav-link');

  menu.style.right = '-250px';
  
  let barsClickHandle = () => {
    if (menu.style.right === '-250px') {
      menu.style.right = '0px';
      bars.style.color = '#fff';
    } else {
      menu.style.right = '-250px';
      bars.style.color = '#ff5733';
    }
  }

  bars.addEventListener('click', barsClickHandle);

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.style.right = '-250px';
      bars.style.color = '#ff5733';
    })
  });

}


document.addEventListener('DOMContentLoaded', handleBars);