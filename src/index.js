import './styles.css';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import loaderToggle from './loader/loader';
import getJSON from './api/getjson';
import { changeBgLogic } from './buttons_handlers/buttons_logic';
import buttonHandler from './buttons_handlers/buttons_handler';

window.masterObj = {
  bg_img: '',
};

function initAll() {
  window.masterObj.bg_img = document.body;
  window.masterObj.buttons = {};
  window.masterObj.buttons.bg = document.querySelector('.change-bg');
  /* add event listeners */
  window.masterObj.buttons.bg.addEventListener('click', () => buttonHandler('bg', changeBgLogic));
}

initAll();

const test = document.querySelector('.loader');
setTimeout(() => { loaderToggle(test); }, 1000);

getJSON('http://ipinfo.io/?token=8f1769cb9f55d9').then((result) => { console.log(result); });
