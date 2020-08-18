import Header from './header';
import Home from './homepage';
import About from './about';
import Contact from './contact';
import Menu from './menu';
import Footer from './footer';

const frag = document.createDocumentFragment();

const mainSection = document.createElement('main');
mainSection.className = 'main';
mainSection.id = 'main';
function main(section) {
  return mainSection.appendChild(section);
}
main(Home.homeFunc());
frag.appendChild(Header.headerFunc());
frag.appendChild(mainSection);
frag.appendChild(Footer.footerFunc());

const content = document.querySelector('#content');

content.appendChild(frag);

const linksUl = document.querySelector('.tabUl');
const links = document.querySelectorAll('.aLink');

function switched(newChild, target) {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(newChild);
  for (let i = 0; i < links.length; i += 1) {
    if (target === links[i].dataset.target) {
      links[i].classList.add('active');
    } else {
      links[i].classList.remove('active');
    }
  }
}

function switchTab(e) {
  if (e.target.classList.contains('aLink')) {
    const tabObject = {
      home: Home.homeFunc(),
      menu: Menu.menuFunc(),
      about: About.aboutFunc(),
      contact: Contact.contactFunc(),
    };
    const currentTarget = e.target.dataset.target;
    const newChild = tabObject[currentTarget];
    switched(newChild, currentTarget);
  }
}

linksUl.addEventListener('click', switchTab);
