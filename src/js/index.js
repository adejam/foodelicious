import Header from './header';
import Home from './homepage';
import Footer from './footer';

const frag = document.createDocumentFragment();

const mainSection = document.createElement('main');
mainSection.className = 'main';
mainSection.appendChild(Home.homeFunc());

frag.appendChild(Header.headerFunc());
frag.appendChild(mainSection);
frag.appendChild(Footer.footerFunc());

const content = document.querySelector('#content');

content.appendChild(frag);
