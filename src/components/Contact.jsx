// ai-email-tool/src/components/ContactPage.jsx
import React from 'react';
import { Container, Typography, Box, TextField, Button, Grid, Paper } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Import marker icon images
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix for marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const ContactPage = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Typography variant="h2" align="center" gutterBottom sx={{ color: '#333' }}>
                Get in Touch
            </Typography>
            <Typography variant="h5" align="center" paragraph sx={{ color: '#555' }}>
                We would love to hear from you! Please fill out the form below or reach out to us directly.
            </Typography>

            <Grid container spacing={4} sx={{ mt: 4 }}>
                {/* Contact Form */}
                <Grid item xs={12} md={6}>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            padding: 3, 
                            borderRadius: '16px', // Increased border radius
                            transition: '0.3s', // Animation for hover effect
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Shadow on hover
                                transform: 'scale(1.02)', // Slight scale effect on hover
                            },
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            Contact Form
                        </Typography>
                        <TextField
                            fullWidth
                            label="Name"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            variant="outlined"
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            label="Message"
                            variant="outlined"
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                            Send Message
                        </Button>
                    </Paper>
                </Grid>

                {/* Location Map */}
                <Grid item xs={12} md={6}>
                    <Paper 
                        elevation={3} 
                        sx={{ 
                            height: '100%', 
                            borderRadius: '16px', // Increased border radius
                            transition: '0.3s', // Animation for hover effect
                            '&:hover': {
                                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)', // Shadow on hover
                                transform: 'scale(1.02)', // Slight scale effect on hover
                            },
                        }}
                    >
                        <Typography variant="h5" gutterBottom sx={{ padding: 2 }}>
                            Our Location
                        </Typography>
                        <MapContainer center={[58.5953, 25.0136]} zoom={7} style={{ height: '300px', width: '100%' }}>
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            <Marker position={[58.5953, 25.0136]}>
                                <Popup>
                                    Our Office in Estonia
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </Paper>
                </Grid>
            </Grid>

            {/* Additional Contact Information */}
            <Box sx={{ mt: 5, textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom>
                    Contact Information
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                    Phone: <a href="tel:+3721234567">+372 123 4567</a>
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                    Email: <a href="mailto:info@yourcompany.com">info@yourcompany.com</a>
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                    Address: Estonia
                </Typography>
                <Typography variant="body1" sx={{ color: '#555' }}>
                    Follow us on social media:
                </Typography>
                <Box sx={{ mt: 1 }}>
                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
                        Facebook
                    </Button>
                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
                        Twitter
                    </Button>
                    <Button variant="outlined" color="primary" sx={{ mx: 1 }}>
                        LinkedIn
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default ContactPage;