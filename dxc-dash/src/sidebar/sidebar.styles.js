import styled from '@emotion/styled';
export const SidebarContainer = styled.div`
    display: grid;
    width: ${p => p.isSidebarOpen ? '20%' : '5%'};
    grid-template-rows: 10% auto auto;
    
    max-width: 280px;
    min-width: 80px;
    background-image: 
        linear-gradient(
        315deg,
        rgba(164, 80, 139, 0.8) 0%,
        rgba(95, 10, 135, 0.8) 74%),
        url(${p => p.backgroundImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border-radius: 10px;
    margin: 2vh;
    
          
`
export const SidebarHeader = styled.h3`
    justify-self: center;
    margin-top: 3vh;
    margin-bottom: 2vh;
    color:white;
    
     
`

export const SidebarItemsContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 10% 10% 10% 10%;
    row-gap: 2vh;
    margin-top: 2vh;
    justify-items: center;
`

export const MenuItem = styled.div`
    display: grid;
    grid-template-columns: ${p => p.isSidebarOpen ? '6rem auto 3rem' : 'none'};
    width: 100%;
    height: 4rem;
    color:${p => p.selected ? '#ff0000' : 'white'};
    box-shadow: ${p => p.selected ? '0 4px 2px -2px #0a0612' : ''};
    line-height: 1.5;
    text-transform: uppercase;
    transition: .2s ease-in margin-left; 
    transform: translateZ(0);
    
    &:hover {
        ${p => p.isSidebarOpen && `box-shadow: 0 4px 2px -2px #0a0612;`}
        color: #ff0000;
        transition: .2s ease-in all;
    }
`
export const Text = styled.p`
    align-self: center;
    justify-self:left;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: 2px;
    display: ${p => p.isSidebarOpen ? '' : 'none'}
    
`
export const IconContainer = styled.div`
    align-self: center;
    justify-self: center;
    height: 2.8vh;
    
`
export const DropDownIcon = styled.div`
    align-self: center;
    justify-self: center;
    top: 12px;
    border: ${p => p.selected ? 'solid #ff0000' : 'solid #ffffff'};
    ${p => p.isMenuItemHover && `border: solid #ff0000;`}

    border-width: 0 1px 1px 0;
    padding: 3px;
    transform: rotate(45deg);
    display: ${p => p.isSidebarOpen ? '' : 'none'};
`


export const ToglerContainer = styled.div`
    display: grid;
    width: 30%;
    justify-self: center;
    //align-self: center;
    color: white;
    position: relative;
    align-items: center;


`

export const Togler = styled.div`
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: .1em;
        background: #fff;
        box-shadow: 
            0 .75em 0 0 #fff,
            0 1.5em 0 0 #fff;
    }
`
