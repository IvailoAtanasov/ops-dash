import React, { useState, useEffect } from 'react';
import * as s from './sidebar.styles'
import { GrDxc } from 'react-icons/gr';
import { Link } from 'react-router-dom'



const Sidebar = props => {
    const { 
        backgroundImage = '',
        menuItems = [], 
        } = props;

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name)
    const [isSidebarOpen, setSidebarState] = useState(true)
    
    
    //update of sidebar state
    useEffect(() => {
        const updateWindowWidth = () => {
            if (window.innerWidth < 1280) setSidebarState(false)
            else setSidebarState(true)
        }
        window.addEventListener('resize',updateWindowWidth)
        return () => window.removeEventListener('resize',updateWindowWidth)
    }, [isSidebarOpen])
    

    const handleMenuItemClick = name => {
        setSelectedMenuItem(name)
    }

    

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name
        
        return(
            <Link to={item.to} style={{ textDecoration: 'none' }}>
            <s.MenuItem key={index}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name)}
                        isSidebarOpen={isSidebarOpen}
                        >
                        
                        
                <s.IconContainer >{item.icon}</s.IconContainer>
                <s.Text isSidebarOpen={isSidebarOpen}>{item.name}</s.Text>
                
                
            </s.MenuItem>
            </Link>
            
        )
    })
    
    return (
        <s.SidebarContainer 
            backgroundImage={backgroundImage} 
            isSidebarOpen={isSidebarOpen}>
            <s.SidebarHeader><GrDxc size={50}/></s.SidebarHeader>
            <s.SidebarItemsContainer>{menuItemsJSX}</s.SidebarItemsContainer>
            <s.ToglerContainer onClick={() => setSidebarState(!isSidebarOpen)}>
                <s.Togler></s.Togler>
            </s.ToglerContainer>
        </s.SidebarContainer>
    );
};

export default Sidebar;