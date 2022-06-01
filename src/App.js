import React, { useState } from 'react';
import './styles/reset.css'
import IconMenu from './components/IconMenu';
import BurgerMenu from './components/BurgerMenu';

const items = [
  {
    id: 31123,
    href: '/',
    content: 'Home',
  },
  {
    id: 151214,
    href: '/fotos',
    content: 'Fotos', 
  },
  {
    id: 1235125,
    href: '/contatos',
    content: 'Contato',
  },
];

function App() {
  const [ active, setActive ] = useState(false);

  function openMenu ( ) {
   setActive(true);
  }

  function closeMenu ( ) {
    setActive(false);
   }
  

  return  (
    <>
    <IconMenu onClick={openMenu} />
    <BurgerMenu items={ items } active={active} closeMenu={closeMenu}/>
    </>

  )
}

export default App;
