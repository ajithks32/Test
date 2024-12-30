import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Typography, IconButton, Drawer, List, ListItem, ListItemText, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '@fontsource/montserrat';
import '@fontsource/poppins';

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const isMobile = useMediaQuery('(max-width:960px)'); // Use the media query string instead of a function

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawerContent = (
        <List>
            <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={Link} to="/about">
                <ListItemText primary="About" />
            </ListItem>
            <ListItem button component={Link} to="/projects">
                <ListItemText primary="Projects" />
            </ListItem>
            <ListItem button component={Link} to="/skills">
                <ListItemText primary="Skills" />
            </ListItem>
            <ListItem button component={Link} to="/resume">
                <ListItemText primary="Resume" />
            </ListItem>
            <ListItem button component={Link} to="/contact">
                <ListItemText primary="Contact" />
            </ListItem>
        </List>
    );

    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                {/* Logo/Title */}
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        fontWeight: 'bold',
                        fontFamily: 'Montserrat, sans-serif',
                    }}
                >
                    My Portfolio
                </Typography>

                {/* Desktop Links */}
                {!isMobile && (
                    <Box sx={{ display: 'flex', gap: 3 }}>
                        <Button
                            color="inherit"
                            component={Link} // Use Link for navigation
                            to="/" // Set the path
                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Home
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/about"
                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            About
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/projects"
                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Projects
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/#skills"
                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Skills
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/resume"
                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Resume
                        </Button>
                        <Button
                            color="inherit"
                            component={Link}
                            to="/contact"
                            sx={{ fontFamily: 'Poppins, sans-serif' }}
                        >
                            Contact
                        </Button>
                    </Box>
                )}

                {/* Mobile Menu Toggle */}
                {isMobile && (
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>
                )}

                {/* Drawer for Mobile View */}
                <Drawer anchor="right" open={mobileOpen} onClose={handleDrawerToggle}>
                    {drawerContent}
                </Drawer>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
