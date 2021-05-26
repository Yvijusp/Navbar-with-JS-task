// Sukurkite HTML dokumentą, kuris <body> dalyje turės tris žymas, t.y. <header>, <main>, <footer>.
// <header> dalyje bus navigacijos meniu su 5 nuorodomis, kuris bus “Responsive” (mobilioje versjoje turi būti “toggler” mygtukas, kurį paspaudus atsiranda meniu)

const button = document.querySelector('#btn');
const container = document.querySelector('.container');
let header = document.createElement('header');
let main = document.createElement('main');
let footer = document.createElement('footer');
let toggler = document.createElement('div');
let logo = document.createElement('div');
let a = document.createElement('a');
let ul = document.createElement('ul');
let li = document.createElement('li');
let p = document.createElement('p');
let i = document.createElement('i');
let nav = document.createElement('nav');
let body = document.body;
const tablet = window.matchMedia('(min-width: 768px)');

const home = document.createTextNode('Home');
const aboutUs = document.createTextNode('About us');
const service = document.createTextNode('Service ');
const contactUs = document.createTextNode('Contact us');

body.style.margin = '0';
body.style.pading = '0';
body.style.boxSizing = 'border-box';

button.addEventListener('click', () => {
  document.body.appendChild(header);
  header.style.display = 'flex';
  header.style.padding = '15px';
  header.style.flexWrap = 'wrap';
  header.style.backgroundColor = 'indigo';
  header.style.alignItems = ' center';
  header.appendChild(logo);
  logo.textContent = 'LOGO';
  logo.style.width = '50%';
  logo.style.color = 'white';
  logo.style.fontSize = '2em';
  header.appendChild(toggler);
  toggler.style.width = '0&';
  toggler.style.display = 'none';
  toggler.style.justifyContent = 'flex-end';
  toggler.style.fontSize = '2em';
  toggler.style.color = 'white';
  toggler.appendChild(i);
  i.className = 'fas fa-bars';
  i.style.cursor = 'pointer';
  header.appendChild(nav);
  nav.style.width = '50%';
  nav.style.textAlign = 'center';
  nav.style.display = 'block';
  nav.appendChild(ul);
  ul.style.listStyle = 'none';
  ul.style.display = 'flex';
  ul.style.flexDirection = 'row';
  ul.style.justifyContent = 'flex-end';
  ul.style.margin = '5px';
  li.style.color = 'white';
  li.style.padding = '3px';
  a.style.cursor = 'pointer';
  ul.appendChild(li).appendChild(a).appendChild(home);
  ul.appendChild(li.cloneNode())
    .appendChild(a.cloneNode())
    .appendChild(aboutUs);
  ul.appendChild(li.cloneNode())
    .appendChild(a.cloneNode())
    .appendChild(service);
  ul.appendChild(li.cloneNode())
    .appendChild(a.cloneNode())
    .appendChild(contactUs);

  i.addEventListener('click', () => {
    if (nav.style.display === 'none') {
      nav.style.display = 'block';
      return;
    }
    nav.style.display = 'none';
  });

  tablet.onchange = (e) => {
    if (tablet.matches) {
      toggler.style.width = '0&';
      toggler.style.display = 'none';
      nav.style.width = '50%';
      nav.style.display = 'block';
      ul.style.flexDirection = 'row';
      ul.style.justifyContent = 'flex-end';
      return;
    }
    toggler.style.width = '50%';
    toggler.style.display = 'flex';
    nav.style.width = '100%';
    nav.style.display = 'none';
    ul.style.flexDirection = 'column';
  };

  document.body.appendChild(main);
  document.body.appendChild(footer);
  document.body.removeChild(container);
});
