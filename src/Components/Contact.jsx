import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Grid } from '@mui/material';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import emailjs from 'emailjs-com'; // Import EmailJS SDK

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_message: '',
    });

    const [feedback, setFeedback] = useState(''); // Feedback message state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ychg6bg', // Replace with your service ID
                'template_lt092ss', // Replace with your template ID
                e.target, // The form element
                'M5i5Eq_N1JTAfTTAV' // Replace with your user ID
            )
            .then(
                (result) => {
                    console.log('Email sent:', result);
                    setFeedback('Message sent successfully!');
                    setFormData({ user_name: '', user_email: '', user_message: '' }); // Reset form
                },
                (error) => {
                    console.error('Error sending email:', error);
                    setFeedback('An error occurred, please try again.');
                }
            );
    };

    return (
        <Box
            id="contact"
            sx={{
                padding: { xs: 2, sm: 4 },
                backgroundColor: '#f5f5f5',
                minHeight: 'calc(100vh - 64px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                marginTop: { xs: '64px', sm: '0' },
            }}
        >
            <Typography
                variant="h4"
                sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 'bold',
                    marginBottom: 2,
                    fontSize: { xs: '1.5rem', sm: '2.5rem' },
                    textAlign: 'center',
                }}
            >
                Get in Touch
            </Typography>

            <Typography
                variant="h6"
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    marginBottom: 4,
                    color: '#555',
                    fontSize: { xs: '1rem', sm: '1.25rem' },
                    textAlign: 'center',
                    maxWidth: '600px',
                    margin: '0 auto',
                }}
            >
                I would love to hear from you! Please reach out if you have any questions or want to collaborate.
            </Typography>

            {/* Contact Form */}
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3} justifyContent="center" sx={{ maxWidth: '600px', width: '100%' }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            name="user_name"
                            value={formData.user_name}
                            onChange={handleChange}
                            sx={{ marginBottom: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            name="user_email"
                            value={formData.user_email}
                            onChange={handleChange}
                            sx={{ marginBottom: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            name="user_message"
                            value={formData.user_message}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            sx={{ marginBottom: 2 }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{
                                fontFamily: 'Poppins, sans-serif',
                                padding: '10px 20px',
                                borderRadius: '20px',
                            }}
                            type="submit"
                        >
                            Send Message
                        </Button>
                    </Grid>
                </Grid>
            </form>

            {/* Feedback Message */}
            {feedback && (
                <Typography
                    variant="body1"
                    color={feedback.includes('error') ? 'error' : 'primary'}
                    sx={{ marginTop: 2 }}
                >
                    {feedback}
                </Typography>
            )}
        </Box>
    );
};

export default Contact;
