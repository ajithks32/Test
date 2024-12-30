import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import '@fontsource/montserrat';
import '@fontsource/poppins';

const Home = () => {
    return (
        <Box
            sx={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                padding: { xs: 2, sm: 3 }, // Padding adapts on mobile and larger screens
            }}
            id="home"
        >
            <Container>
                {/* Welcome Text */}
                <Typography
                    variant="h2"
                    sx={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: 2,
                        fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
                    }}
                >
                    Welcome to My Portfolio
                </Typography>

                {/* Subtitle */}
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        color: '#555',
                        marginBottom: 4,
                        fontSize: { xs: '1rem', sm: '1.25rem' }, // Responsive font size
                    }}
                >
                    I'm a passionate Front-End Developer who loves crafting beautiful and functional user experiences.
                </Typography>

                {/* Call to Action */}
                <Button
                    variant="contained"
                    color="primary"
                    href="#projects"
                    sx={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        padding: { xs: '8px 16px', sm: '10px 20px' }, // Responsive padding
                        borderRadius: '20px',
                    }}
                >
                    View My Projects
                </Button>
            </Container>
        </Box>
    );
};

export default Home;
