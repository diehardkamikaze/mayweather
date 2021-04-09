import './styles.css';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import addLoader from './loader/loader';
import getJSON from './api/getjson';
import { changeBgLogic } from './buttons_handlers/buttons_logic';
import buttonHandler from './buttons_handlers/buttons_handler';

const zZ = addLoader(document.body);
window.masterObj = {
  bg_img: '',
};

function initAll() {
  changeBgLogic('bg');
  window.masterObj.bg = document.body;


  window.masterObj.buttons = {};
  window.masterObj.buttons.bg = document.querySelector('.change-bg');
  window.masterObj.buttons.unit = document.querySelector('.change-unit');
  window.masterObj.buttons.lang = document.querySelector('.change-lang');
  /* add event listeners */
  window.masterObj.buttons.bg.addEventListener('click', () => buttonHandler('bg', changeBgLogic));
}

initAll();

setTimeout(() => { document.body.removeChild(zZ); }, 1000);

getJSON('http://ipinfo.io/?token=8f1769cb9f55d9').then((result) => { console.log(result); });
