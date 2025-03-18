import React from 'react';
import { Card, CardMedia, CardActions, Button } from '@mui/material';

const FeedCard = () => {
    return (
        <Card sx={{ width: "500px" }}>
            <CardMedia
                component="img"
                alt="Image"
                height="400"
                image="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQCyzdroOgXf1JRT-59-ejJoIE0a9KVvyVwXUrA5xytU8gCuncLXYXL3DO2b1_-YnaUWD0lgEsd3ddXvZg"
            />
            <CardActions sx={{ justifyContent: 'space-around' }}>
                <Button variant="contained" color="secondary">
                    Ignore
                </Button>
                <Button variant="contained" color="primary">
                    Request
                </Button>
            </CardActions>
        </Card>
    );
};

export default FeedCard;