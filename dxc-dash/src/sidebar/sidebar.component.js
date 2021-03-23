import React, { useState } from 'react';
import * as s from './sidebar.styles'
import { GrDxc } from 'react-icons/gr';


const Sidebar = props => {
    const { 
        backgroundImage = '',
        menuItems = [], 
        } = props;

    const [selected, setSelectedMenuItem] = useState(menuItems[0].name)

    const handleMenuItemClick = name => {
        setSelectedMenuItem(name)
    }

    const menuItemsJSX = menuItems.map((item, index) => {
        const isItemSelected = selected === item.name
        return(
            <s.MenuItem key={index}
                        selected={isItemSelected}
                        onClick={() => handleMenuItemClick(item.name)}>
                        
                <s.IconContainer >{item.icon}</s.IconContainer>
                <s.Text>{item.name}</s.Text>
            </s.MenuItem>
        )
    })
    
    

    return (
        <s.SidebarContainer backgroundImage={backgroundImage}>
            <s.SidebarHeader><GrDxc size={50}/></s.SidebarHeader>
            <s.SidebarItemsContainer>{menuItemsJSX}</s.SidebarItemsContainer>
        </s.SidebarContainer>
    );
};

export default Sidebar;