import './styles.css';
import './assets/fonts/Roboto/Roboto-Regular.ttf';
import loaderToggle from './loader/loader';

const test = document.querySelector('.loader');
setTimeout(() => { loaderToggle(test); }, 5000);
