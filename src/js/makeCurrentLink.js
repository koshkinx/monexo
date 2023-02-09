import presentCard from '../template/presentCardAppend.hbs';
import presentCardSecond from '../template/presentCardAppendSecond.hbs';
import cardHover from '../data/cardHover.json';
const markUpContainer = document.querySelector('.js-container-makrUp');
const markupFirst = presentCard(cardHover);
const markupSecond = presentCardSecond(cardHover);
const currentLinkAll = document.querySelectorAll('.tablist_item');
addCard();
for (let i = 0; i < currentLinkAll.length; i++) {
  const element = currentLinkAll[i];
  element.addEventListener('click', getClick);
  function getClick(e) {
    removeActiveCardClass();
    const currentCard = e.currentTarget;
    const currentTitleEl = e.currentTarget.children[0];

    if (currentTitleEl.innerText === 'I have some Experience') {
      markUpContainer.innerHTML = '';
      addCardSecond();
    }
    if (currentTitleEl.innerText === 'New to Investing') {
      markUpContainer.innerHTML = '';
      addCard();
    }
    if (currentTitleEl.innerText === 'A Regular Investor') {
      markUpContainer.innerHTML = '';
    }
    addActiveCardClass(currentCard, currentTitleEl);
  }
}
function removeActiveCardClass() {
  const isActive = document.querySelector('.tablist_item_active');
  const titleIsActive = document.querySelector('.title_current');

  if (isActive) {
    isActive.classList.remove('tablist_item_active');
    titleIsActive.classList.remove('title_current');
  }
}
function addActiveCardClass(card, title) {
  card.classList.add('tablist_item_active');
  title.classList.add('title_current');
}
function addCard() {
  markUpContainer.insertAdjacentHTML('afterbegin', markupFirst);
}
function addCardSecond() {
  markUpContainer.insertAdjacentHTML('afterbegin', markupSecond);
}
