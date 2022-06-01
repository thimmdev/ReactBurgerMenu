import styled from 'styled-components'
import menu from '../../assets/images/menu.svg'

const IconMenu = styled.img.attrs({ src: menu })`
    width: 30px;
    padding: 10px;
    cursor: pointer;
    transition: transform 100ms linear;

    &:hover {
        transform: scale(1.1)
    }

`;

export default IconMenu;