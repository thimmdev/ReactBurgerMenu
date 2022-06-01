import React from 'react';
import { Item, Navigation, Wrapper } from './styles';


function BurgerMenu ( { items, active, closeMenu } ) {
    return ( 
        <Wrapper onClick={closeMenu} active={active}>
        <Navigation>
            { items.map(( item ) => (
            <Item key={item.id} href={item.href}> {item.content} </Item>
            ))}        
        </Navigation>
        </Wrapper>
    );
}

export default BurgerMenu;