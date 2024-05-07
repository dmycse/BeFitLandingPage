function handleBars() {

  let menu = document.getElementById('menu');
  let bars = document.getElementById('bars');
  let links = document.querySelectorAll('.header__nav-link');

  let resetTrainingsCards = () => {
    let trainingsCards = document.querySelectorAll('.trainings__cardlist');
    let activeCard = document.querySelector('.trainings__active');
    activeCard.classList.remove('trainings__active');
    trainingsCards.forEach((card, idx) => {
      card.classList.add(`${idx === 0 ? 'trainings__active' : 'trainings__cards'}`);
    });
  }

  let resetNavBtns = () => {    
    let btns = document.querySelectorAll('.trainings__nav-btn');
    let activeBtn = document.querySelector('.trainings__nav-active');
    activeBtn.classList.remove('trainings__nav-active');
    btns.forEach((btn, idx) => {
      btn.classList.add(`${idx === 0 ? 'trainings__nav-active' : 'noactive'}`);
    });
  }


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

  bars.addEventListener('click', () => barsClickHandle());

  links.forEach(link => {
    link.addEventListener('click', () => {
      resetTrainingsCards();
      resetNavBtns();
      menu.style.right = '-250px';
      bars.style.color = '#ff5733';
    })
  });
}

function initTrainigsSlider() {
  let sliderBtns = document.querySelector('.trainings__slider-nav');
  let trainingsCards = document.querySelectorAll('.trainings__cardlist');
  let btns = sliderBtns.querySelectorAll('.trainings__nav-btn');

  initTraningsCards();
  initSliderBtns();

  function initTraningsCards(num = 0) {
    trainingsCards.forEach((card, idx) => {
      card.dataset.index = idx;
      if (idx === num) {
        card.classList.remove('trainings__cards');
        card.classList.add('trainings__active');
      } else {
        card.classList.remove('trainings__active');
        card.classList.add('trainings__cards');
      }
    });
  }

  function initSliderBtns() {
    btns.forEach((btn, idx) => {
      btn.classList.add(`${idx === 0 ? 'trainings__nav-active' : 'noactive'}`);
      
      btn.addEventListener('click', () => {
        initTraningsCards(idx);
        let cardListNum = +document.querySelector('.trainings__active').dataset.index;
        
        if (cardListNum === idx) {
          let activeBtn = document.querySelector('.trainings__nav-active');
          activeBtn.classList.remove('trainings__nav-active');
          btn.classList.remove('noactive');
          btn.classList.add('trainings__nav-active');
        }
      })
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  handleBars();
  initTrainigsSlider();
});