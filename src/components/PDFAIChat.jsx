import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const PDFAIChat = () => {
    return (
        <Container maxWidth="md" sx={{ py: 5 }}>
            <Typography variant="h4" align="center" gutterBottom>
                PDF AI Chat
            </Typography>
            <Typography variant="body1" align="center" color="textSecondary" paragraph>
                Chat with your PDF documents. Our PDF AI Chat tool allows you to ask questions and get instant answers from your documents.
            </Typography>

            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="https://images.unsplash.com/photo-1584697964160-1b0c1c1c1c1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEwfHxjb25uZWN0JTIweW91ciUyMGVtYWlsfGVufDB8fHx8MTY2MjI3MjY0NQ&ixlib=rb-1.2.1&q=80&w=400"
                            alt="PDF AI Chat"
                        />
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Features
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                - Ask questions about your PDF<br />
                                - Get instant answers<br />
                                - Summarize content<br />
                                - Extract key information
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                {/* Add more content or features as needed */}
            </Grid>
        </Container>
    );
};

export default PDFAIChat; 