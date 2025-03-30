import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    CardMedia,
} from "@mui/material";
import { fetchInterestedPeople } from '../redux/reducers/interestsSlice'
import { reviewRequest } from '../redux/reducers/interestsSlice'

function Interests() {

    const dispatch = useDispatch()
    const { interestedPeople } = useSelector((state) => state.interestsReducer)

    useEffect(() => {
        dispatch(fetchInterestedPeople())
    }, [dispatch])

    const rejectRequest = (interestId) => { dispatch(reviewRequest({ status: 'rejected', requestId: interestId })) }

    const acceptRequest = (interestId) => { dispatch(reviewRequest({ status: 'accepted', requestId: interestId })) }

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                Interests
            </Typography>

            <Typography variant="h6" gutterBottom align="center">
                {interestedPeople.length > 0 ? interestedPeople.length : 'No'} {interestedPeople.length === `` ? 'user' : 'users'} found !!
            </Typography>

            {interestedPeople.map((interest, index) => (
                <Card sx={{ mb: 3, boxShadow: 3 }} key={index}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={interest.fromUserId?.photoUrl || "https://via.placeholder.com/150"}
                        alt={interest.fromUserId?.firstName}
                        sx={{ objectFit: "cover" }} // Ensures the image fills the space nicely
                    />
                    <CardContent>
                        <Typography variant="h6">{interest.fromUserId?.firstName}</Typography>
                        <Typography color="textSecondary">
                            {interest.fromUserId?.age} years
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => rejectRequest(interest._id)}>
                            Reject
                        </Button>
                        <Button variant="contained" color="primary" onClick={() => acceptRequest(interest._id)}>
                            Accept
                        </Button>
                    </CardActions>
                </Card>
            ))}
        </Container>
    )
}

export default Interests