import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import '@fontsource/montserrat';
import '@fontsource/poppins';

const About = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#fff',
                padding: { xs: 3, sm: 5 },
                textAlign: 'center',
                minHeight: '100vh',
            }}
            id="about"
        >
            <Container>
                {/* Title */}
                <Typography
                    variant="h3"
                    sx={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 'bold',
                        color: '#333',
                        marginBottom: 4,
                        fontSize: { xs: '2rem', sm: '3rem' },
                    }}
                >
                    About Me
                </Typography>

                {/* About Content */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Paper
                            sx={{
                                padding: 3,
                                backgroundColor: '#f4f4f4',
                                borderRadius: 2,
                                boxShadow: 2,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    color: '#555',
                                    fontSize: { xs: '1rem', sm: '1.125rem' },
                                    lineHeight: 1.6,
                                }}
                            >
                                Hello! I’m Ajith, a passionate Front-End Developer with a knack for creating beautiful, functional, and user-friendly websites and applications. I specialize in using modern JavaScript frameworks like React to build responsive, performant, and accessible web applications. I enjoy solving problems and continuously learning new technologies to stay ahead in this dynamic field. Let’s build something amazing together!
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Paper
                            sx={{
                                padding: 3,
                                backgroundColor: '#f4f4f4',
                                borderRadius: 2,
                                boxShadow: 2,
                            }}
                        >
                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: 'Poppins, sans-serif',
                                    color: '#555',
                                    fontSize: { xs: '1rem', sm: '1.125rem' },
                                    lineHeight: 1.6,
                                }}
                            >
                                I believe that good design and user experience are key to making a lasting impact. I strive to create websites that are not only visually appealing but also intuitive and easy to navigate. When I'm not coding, you can find me exploring new technologies, reading books, or enjoying some music. Feel free to check out my projects and get in touch if you have any questions!
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default About;
