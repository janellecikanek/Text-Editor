import { Workbox } from 'workbox-window';
import Editor from './editor';
import Database from './database';
import Header from './header';
import '../css/style.css';

const main = document.querySelector('#main');
main.innerHTML = '';

const loadSpinner = () => {
  const spinner = document.createElement('div');
  spinner.classList.add('spinner');
  spinner.innerHTML = `
  <div class="loading-container">
  <div class="loading-spinner" />
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === 'undefined') {
  loadSpinner();
}

// Check if service workers are supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  // register workbox service worker
  const workboxSW = new Workbox('/src-sw.js');
  workboxSW.register('/src-sw.js')
  .then((register) => console.log(register));
} else {
  console.error('Service workers are not supported in this browser.');
}