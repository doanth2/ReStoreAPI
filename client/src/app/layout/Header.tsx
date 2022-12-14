import {
    AppBar, Badge, Box, IconButton, List, ListItem, Switch,
    Toolbar, Typography
} from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}
const midLinks = [
    { title: 'catalog', path: '/catalog' },
    { title: 'about', path: '/about' },
    { title: 'contact', path: '/contact' }
]
const rightLinks = [
    { title: 'login', path: '/login' },
    { title: 'register', path: '/register' },
]
const navStyles = {
    color: 'inherit',
    typography: 'h6',
    '&:hover': {
        color: 'yellow'
    },
    '&.active': {
        color: 'text.success'
    }
}
export default function Header({ darkMode, handleThemeChange }: Props) {

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box display='flex' alignItems='center'>
                        <Typography
                        >
                            Re-STORE
                        </Typography >
                        <Switch checked={darkMode} onChange={handleThemeChange} />
                    </Box>
                    <List sx={{ display: 'flex' }} >
                        {midLinks.map(({ title, path }) => (
                            <ListItem component={Link}
                                to={path}
                                key={path}
                                sx={navStyles}
                            >
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                    <Box display='flex' alignItems='center'>
                        <IconButton size='large' sx={{ color: 'inherit' }} >
                            <Badge badgeContent={4} color='secondary'>
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton >
                        <List sx={{ display: 'flex', textAlign: 'end' }} >
                            {rightLinks.map(({ title, path }) => (
                                <ListItem component={Link}
                                    to={path}
                                    key={path}
                                    sx={navStyles}
                                >
                                    {title.toUpperCase()}
                                </ListItem>
                            ))}
                        </List>
                    </Box>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}