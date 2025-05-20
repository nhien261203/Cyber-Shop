import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import LoginIcon from '@mui/icons-material/Login';

const menuItems = [
    { text: 'Dashboard', icon: <DashboardIcon /> },
    { text: 'Products', icon: <ShoppingCartIcon /> },
    { text: 'Orders', icon: <ShoppingCartIcon /> },
    { text: 'Messages', icon: <MessageIcon /> },
    { text: 'Notifications', icon: <NotificationsIcon /> },
    { text: 'Settings', icon: <SettingsIcon /> },
    { text: 'Login', icon: <LoginIcon /> },
    { text: 'Sign Up', icon: <PeopleIcon /> },
];

export default function Sidebar() {
    return (
        <Drawer variant="permanent" anchor="left">
            <List>
                {menuItems.map((item, index) => (
                    <ListItem button key={index}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}
