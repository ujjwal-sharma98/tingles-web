import React from 'react';
import { useDispatch } from 'react-redux';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import { swipeUser } from '../redux/reducers/feedSlice';

const FeedCard = ({ currentUser }) => {

    const dispatch = useDispatch();

    const ignoreUser = () => {
        dispatch(swipeUser({ status: "ignored", toUserId: currentUser._id.toString() }))
    }

    const requestUser = () => {
        dispatch(swipeUser({ status: "interested", toUserId: currentUser._id.toString() }))
    }

    return (
        <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
            <Card sx={{ width: 350, borderRadius: 3, boxShadow: 5 }}>
                <CardMedia
                    component="img"
                    alt={currentUser?.firstName || "User Image"}
                    height="400"
                    image={currentUser?.photoUrl || "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQCyzdroOgXf1JRT-59-ejJoIE0a9KVvyVwXUrA5xytU8gCuncLXYXL3DO2b1_-YnaUWD0lgEsd3ddXvZg"}
                />
                <CardContent>
                    <Typography variant="h6" fontWeight="bold">
                        {currentUser?.firstName} {currentUser?.lastName ? currentUser.lastName : ""}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Age: {currentUser?.age || "N/A"}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                        Gender: {currentUser?.gender || "Not specified"}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-around' }}>
                    <Button variant="contained" color="secondary" onClick={() => ignoreUser()}>
                        Ignore
                    </Button>
                    <Button variant="contained" color="primary" onClick={() => requestUser()}>
                        Request
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default FeedCard;
