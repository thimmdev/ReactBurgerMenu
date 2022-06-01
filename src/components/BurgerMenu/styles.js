import styled, {css} from 'styled-components';

export const Wrapper = styled.div`
position: absolute;
top: 0;
    background-color: rgba(0,0,0,0);
    width: 100vw;
    height: 100vh;
    transform: translateX(-100%);
    transition: transform 200ms linear;

    ${({ active }) => 
    active && 
    css`
    transform: translateX(0%);
    `}
`
export const Navigation = styled.nav`
    width: 16vw;
    height: 100vh;
    background-color: #0c2461;
    position: absolute;
    top: 0;
    
`

export const Item = styled.a `
    display: block;
    text-decoration: none;
    color: #6a89cc;
    background-color: #0c2461;
    padding: 1.4rem 0.6rem;
    transition: background-color 100ms linear;

    &:hover {
        background-color: #1e3799;
    }
`
