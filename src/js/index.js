import Header from './header';
// import Home from './homepage';
// import About from './about';
import Menu from './menu';
import Footer from './footer';

const frag = document.createDocumentFragment();

const mainSection = document.createElement('main');
mainSection.className = 'main';

function main(section) {
  return mainSection.appendChild(section);
}

frag.appendChild(Header.headerFunc());
frag.appendChild(main(Menu.menuFunc()));
frag.appendChild(Footer.footerFunc());

const content = document.querySelector('#content');

content.appendChild(frag);
