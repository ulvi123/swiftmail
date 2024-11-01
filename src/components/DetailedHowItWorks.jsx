// ai-email-tool/src/components/DetailedHowItWorks.jsx
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const DetailedHowItWorksPage = () => {
    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                How It Works - Detailed Guide
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Learn how to leverage our AI tools for optimal email management.
            </Typography>

            {/* Card 1 */}
            <Grid container spacing={4} alignItems="center" mb={4}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1517242022020-1a1e1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDF8fHNpZ24lMjB1c3B8ZW58MHx8fHwxNjYyMjY5NzY0&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Step 1: Sign Up"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Step 1: Sign Up
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                To get started, create your account by providing your email and setting a password. 
                                Our sign-up process is quick and straightforward, allowing you to access all features immediately. 
                                Once registered, you will receive a confirmation email to verify your account.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card 2 */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1584697964160-1b0c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb25uZWN0JTIweW91ciUyMGVtYWlsfGVufDB8fHx8MTY2MjI3MjY0NQ&ixlib=rb-1.2.1&q=80&w=400"
                            alt="Step 2: Connect Your Email"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Step 2: Connect Your Email
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                After signing up, you can connect your email accounts. 
                                Our platform supports various email providers, making it easy to integrate your existing accounts. 
                                Simply follow the prompts to authorize access, and your emails will be imported seamlessly.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                {/* Card 3 */}
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1584697964160-1b0c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb25uZWN0JTIweW91ciUyMGVtYWlsfGVufDB8fHx"
                            alt="Step 3: Start Using the Tool"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Step 3: Start Using the Tool
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                With your email connected, you can now start using our AI tools to manage your emails effectively. 
                                Explore the features available to enhance your productivity and streamline your email management.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DetailedHowItWorksPage;