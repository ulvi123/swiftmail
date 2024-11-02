import React from 'react';
import { Container, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';

// Import images
import image1 from '../assets/1.1.png'; // Adjust the path as necessary
import image2 from '../assets/2.png'; // Adjust the path as necessary
import image3 from '../assets/3.png'; // Adjust the path as necessary
import image4 from '../assets/4.png'; // Adjust the path as necessary

const ProductHowItWorks = () => {
    const steps = [
        {
            title: "Step 1: Sign Up",
            description: "Begin your journey with a simple and secure signup process. It takes less than a minute to get started, allowing you to access all the features of our platform quickly and efficiently.",
            image: image1
        },
        {
            title: "Step 2: Connect Your Email",
            description: "Easily integrate your email accounts with our secure platform. With just a few clicks, you can connect all your email accounts and start enjoying the benefits of our AI-powered assistant.",
            image: image2
        },
        {
            title: "Step 3: Start Writing Better",
            description: "Leverage the power of AI to enhance your email writing. Our assistant provides intelligent suggestions and helps you craft perfect emails that achieve the results you desire.",
            image: image3
        },
        {
            title: "Step 4: Enjoy the Benefits",
            description: "Experience seamless email communication with our advanced features. Enjoy improved productivity and efficiency as you manage your emails with ease and confidence.",
            image: image4
        }
    ];

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <h2 className="text-4xl font-bold text-center mb-16">
                How we envision it
            </h2>
            <Grid container spacing={4}>
                {steps.map((step, index) => (
                    <Grid item xs={12} key={index} container alignItems="center" spacing={2}>
                        {index % 2 === 0 ? (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <CardMedia
                                        component="img"
                                        height="200" // Adjust height as needed
                                        image={step.image}
                                        alt={step.title}
                                        sx={{ borderRadius: 2, boxShadow: 3, objectFit: 'cover' }} // Added objectFit
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <Card elevation={0} sx={{ borderRadius: 0 }}>
                                        <CardContent>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                                {step.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
                                                {step.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} sm={6}>
                                    <Card elevation={0} sx={{ borderRadius: 0 }}>
                                        <CardContent>
                                            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
                                                {step.title}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary" sx={{ fontSize: '1.1rem', lineHeight: 1.5 }}>
                                                {step.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <CardMedia
                                        component="img"
                                        height="200" // Adjust height as needed
                                        image={step.image}
                                        alt={step.title}
                                        sx={{ borderRadius: 2, boxShadow: 3, objectFit: 'cover' }} // Added objectFit
                                    />
                                </Grid>
                            </>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default ProductHowItWorks; 