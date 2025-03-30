import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    CardMedia,
} from "@mui/material";
import { fetchMatches, setChatUser } from '../redux/reducers/matchesSlice'

function MyMatches() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { matches } = useSelector((state) => state.matchesReducer)

    useEffect(() => {
        dispatch(fetchMatches())
    }, [dispatch])

    const unMatchUser = () => { window.alert('Feature not added!') }

    const chatWithUser = (user) => {
        dispatch(setChatUser(user))
        navigate(`/chat/${user._id}`)
    }

    return (
        <div>
            <Container maxWidth="sm" sx={{ mt: 5 }}>
                <Typography variant="h4" gutterBottom align="center">
                    My Matches
                </Typography>

                <Typography variant="h6" gutterBottom align="center">
                    {matches.length > 0 ? matches.length : 'No'} {matches.length === `` ? 'match' : 'matches'} found !!
                </Typography>

                {matches.length && matches.map((user, index) => (
                    <Card key={index} sx={{ mb: 3, boxShadow: 3, textAlign: "center", p: 2, width: 280, mx: "auto" }}>

                        <CardMedia
                            component="img"
                            image={user?.photoUrl || "https://via.placeholder.com/150"}
                            alt={user?.firstName}
                            sx={{
                                width: 150,
                                height: 150,
                                borderRadius: "8px",
                                objectFit: "cover",
                                margin: "auto"
                            }}
                        />

                        <CardContent>
                            <Typography variant="h6" fontWeight="bold">
                                {user.firstName}
                            </Typography>
                            <Typography color="textSecondary">
                                {user.age || "N/A"} years
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ justifyContent: "center" }}>
                            <Button variant="contained" color="secondary" onClick={() => unMatchUser()}>
                                Un-match
                            </Button>
                            <Button variant="contained" color="primary" onClick={() => chatWithUser(user)}>
                                Chat
                            </Button>
                        </CardActions>

                    </Card>

                ))}
            </Container>
        </div>
    )
}

export default MyMatches