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
const main = section => mainSection.appendChild(section);
main(Home.homeFunc());
frag.appendChild(Header.headerFunc());
frag.appendChild(mainSection);
frag.appendChild(Footer.footerFunc());

const content = document.querySelector('#content');

content.appendChild(frag);

const linksUl = document.querySelector('.tabUl');
const links = document.querySelectorAll('.aLink');

const switched = (newChild, currentTarget) => {
  const dex = document.querySelector('#main');
  dex.removeChild(dex.childNodes[0]);
  dex.appendChild(newChild);
  for (let i = 0; i < links.length; i += 1) {
    const {
      classList,
      dataset: { target },
    } = links[i];
    /* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
    currentTarget === target ? classList.add('active') : classList.remove('active');
  }
};

const switchTab = e => {
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
};

linksUl.addEventListener('click', switchTab);
