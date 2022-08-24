import styled from 'styled-components';

export const NavContainer = styled.nav`
    background: rgba(0,0,0,0.3);
    width: max-content;
    display: block;
    padding: 0.7rem 1.7rem;
    z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
    display: flex;
    gap: 0.8rem;
    border-radius: 3rem;
    backdrop-filter: blur(15px);
`

export const Navitems = styled.a`
    background: transparent;
    padding: 0.9rem;
    border-radius: 50%;
    display: flex;
    color: #rgba(255,255,255,0.6);
    font-size: 1.1rem;
    color: #4db5ff;
    transition: all 400ms ease;
    
    &:hover{
        background: rgba(0,0,0,0.3);
        color: #fff;
    }

    &.active{
        background: #1f1f38;
        color: #fff;
    }
}
`