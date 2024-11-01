// ai-email-tool/src/components/AboutUs.jsx
import React from 'react';
import { Container, Typography, Box, Button, Grid, Avatar } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif',
        h2: {
            fontSize: '2.5rem', // Increased size for h2
        },
        h4: {
            fontSize: '2rem', // Increased size for h4
        },
        h5: {
            fontSize: '1.5rem', // Increased size for h5
        },
        body1: {
            fontSize: '1.125rem', // Increased size for body1
        },
        body2: {
            fontSize: '1rem', // Increased size for body2
        },
    },
});

const AboutUsPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg" sx={{ py: 5, backgroundColor: 'transparent' }}>
                {/* Header Section */}
                <Box sx={{ textAlign: 'center', mb: 5 }}>
                    <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                        About Us
                    </Typography>
                    <Typography variant="h5" color="text.secondary" paragraph>
                        At <strong>[Your Company Name]</strong>, we are dedicated to transforming the way businesses manage their email communications through innovative AI technology.
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        href="#team" 
                        sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}
                    >
                        Meet Our Team
                    </Button>
                </Box>

                {/* Mission Statement */}
                <Box sx={{ mb: 5 }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333' }}>
                        Our Mission
                    </Typography>
                    <Typography variant="body1" align="center" paragraph sx={{ lineHeight: 1.6, color: '#555' }}>
                        Our mission is to empower businesses to achieve greater productivity and efficiency in their email communications. 
                        We strive to provide innovative solutions that simplify email management and enhance collaboration.
                    </Typography>
                </Box>

                {/* The Story Section */}
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <Box sx={{ textAlign: 'center' }}>
                            <img 
                                src="https://via.placeholder.com/300" // Replace with your caricature image URL
                                alt="Caricature"
                                style={{ width: '100%', borderRadius: '8px' }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 5 }}>
                            <Typography variant="h4" align="left" gutterBottom sx={{ color: '#333' }}>
                                The Story Behind Our Tools
                            </Typography>
                            <Typography variant="body1" align="left" paragraph sx={{ lineHeight: 1.6, color: '#555' }}>
                                As we navigate the complexities of modern work, we often find ourselves juggling multiple tools and platforms. 
                                Our goal is to streamline this experience, bringing everything you need into one cohesive workspace.
                            </Typography>
                            <Typography variant="body1" align="left" paragraph sx={{ lineHeight: 1.6, color: '#555' }}>
                                Inspired by the pioneers of computing, we aim to create a platform that not only enhances productivity but also fosters creativity and collaboration.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* Features Section */}
                <Box sx={{ my: 4 }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333' }}>
                        Why Choose Us?
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {/* Feature 1 */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ padding: 4, textAlign: 'center', boxShadow: 1, borderRadius: 2, height: '100%' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Proven Solutions
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Our tools are backed by extensive research and user feedback, ensuring effectiveness and reliability.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Feature 2 */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ padding: 4, textAlign: 'center', boxShadow: 1, borderRadius: 2, height: '100%' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Expert Team
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Our team consists of industry experts dedicated to providing the best email management solutions.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Feature 3 */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ padding: 4, textAlign: 'center', boxShadow: 1, borderRadius: 2, height: '100%' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Customizable Tools
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Tailor our solutions to fit your unique needs and preferences for optimal performance.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Feature 4 */}
                        <Grid item xs={12} sm={6} md={3}>
                            <Box sx={{ padding: 4, textAlign: 'center', boxShadow: 1, borderRadius: 2, height: '100%' }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                    Customer Satisfaction
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    We prioritize our customers' needs and continuously strive to exceed their expectations.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Team Section */}
                <Box id="team" sx={{ my: 5 }}>
                    <Typography variant="h4" align="center" gutterBottom sx={{ color: '#333' }}>
                        Meet Our Team
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {/* Team Member 1 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: 2 }}>
                                <Avatar
                                    alt="John Doe"
                                    src="https://via.placeholder.com/150"
                                    sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    John Doe
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    CEO & Founder
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    John is a visionary leader with over 10 years of experience in the tech industry, dedicated to driving innovation.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Team Member 2 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: 2 }}>
                                <Avatar
                                    alt="Jane Smith"
                                    src="https://via.placeholder.com/150"
                                    sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Jane Smith
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    CTO
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Jane is a tech enthusiast with a passion for AI and machine learning, leading our development team to new heights.
                                </Typography>
                            </Box>
                        </Grid>

                        {/* Team Member 3 */}
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ padding: 3, textAlign: 'center', boxShadow: 1, borderRadius: 2 }}>
                                <Avatar
                                    alt="Alice Johnson"
                                    src="https://via.placeholder.com/150"
                                    sx={{ width: 100, height: 100, margin: '0 auto', mb: 2 }}
                                />
                                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                    Alice Johnson
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Marketing Director
                                </Typography>
                                <Typography variant="body2" sx={{ mt: 1 }}>
                                    Alice is a marketing guru with a knack for crafting compelling narratives that resonate with our audience.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                {/* Call to Action */}
                <Box sx={{ textAlign: 'center', mt: 5 }}>
                    <Typography variant="h5" gutterBottom>
                        Join Us on Our Journey
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.6 }}>
                        We invite you to join us on this exciting journey as we continue to innovate and enhance the way you manage your emails. 
                        Together, we can achieve more!
                    </Typography>
                    <Button 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        sx={{ boxShadow: 3, transition: '0.3s', '&:hover': { boxShadow: 6 } }}
                    >
                        Get Started
                    </Button>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default AboutUsPage;