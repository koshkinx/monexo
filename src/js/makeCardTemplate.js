import itemsTemplate from '../template/present_card.hbs';
import daily from '../data/card.json';
import weekly from '../data/weekly.json';
const linkAddDaily = document.querySelector('.present_daily__link');
const linkAddWeekly = document.querySelector('.present_weekly__link');
const galleryFer = document.querySelector('.present_card');
const markUpDaily = itemsTemplate(daily);
const markupWeekly = itemsTemplate(weekly);
linkAddDaily.addEventListener('click', appendTemplateDaily);
linkAddWeekly.addEventListener('click', appendTemplateWeekly);
linkAddDaily.classList.add('active');
if (linkAddDaily.classList.contains('active')) {
  appendAfterDownload();
}
function appendAfterDownload() {
  galleryFer.insertAdjacentHTML('beforeend', markUpDaily);
}
function appendTemplateDaily(e) {
  e.preventDefault();
  clearMarkUp();
  linkAddDaily.classList.add('active');
  linkAddWeekly.classList.remove('active');
  galleryFer.insertAdjacentHTML('beforeend', markUpDaily);
}
function appendTemplateWeekly(e) {
  e.preventDefault();
  clearMarkUp();
  linkAddDaily.classList.remove('active');
  linkAddWeekly.classList.add('active');
  galleryFer.insertAdjacentHTML('beforeend', markupWeekly);
}
function clearMarkUp() {
  galleryFer.innerHTML = '';
}
