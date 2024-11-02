import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const AIEmailAssistant = () => {
    return (
        <Container maxWidth="lg" sx={{ py: 5, textAlign: 'center', borderRadius: 2 }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold', color: '#3f51b5', marginTop:"70px"}}>
                Coming Soon!
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph sx={{ mb: 2 }}>
                Our AI Email Assistant is on its way. Stay tuned for an amazing experience that will transform your email communication!
            </Typography>
            <Button variant="contained" color="primary" size="large" sx={{ borderRadius: '20px', padding: '10px 20px' }}>
                Notify Me
            </Button>
        </Container>
    );
};

export default AIEmailAssistant; 