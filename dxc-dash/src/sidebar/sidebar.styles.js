import styled from '@emotion/styled';
export const SidebarContainer = styled.div`
    display: grid;
    grid-template-rows: 10% auto auto;
    width: 20%;
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
    border-radius: 25px;
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
    grid-template-columns: 1rem auto;
    grid-gap: 2vh;
    width: 90%;
    color:${p => p.selected ? '#ff0000' : 'white'};
    box-shadow: ${p => p.selected ? '0 4px 2px -2px #0a0612' : ''};
    line-height: 1.5;
    text-transform: uppercase;

    &:hover {
        box-shadow: 0 4px 2px -2px #0a0612;
        color: #ff0000;
        transition: .2s ease-in all;
    }
`
export const Text = styled.p`
    margin-left: 2rem;
    align-self: center;
    font-size: .8rem;
    font-weight: 700;
    letter-spacing: 2px;
    
`
export const IconContainer = styled.div`
    align-self: center;
    height: 2.8vh;
    margin-left: 2vh;
`
    
