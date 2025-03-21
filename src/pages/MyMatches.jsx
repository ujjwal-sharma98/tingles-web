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
import { fetchMatches } from '../redux/reducers/matchesSlice'

function MyMatches() {

    const dispatch = useDispatch()
    const { matches } = useSelector((state) => state.matchesReducer)

    useEffect(() => {
        dispatch(fetchMatches())
    }, [dispatch])

    const unMatchUser = () => {}

    const chatWithUser = () => {}

  return (
    <div>
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                My Matches
            </Typography>

            <Typography variant="h6" gutterBottom align="center">
                {matches.length > 0 ? matches.length : 'No'} {matches.length === `` ? 'match' : 'matches'} found !!
            </Typography>

            {matches.map((user, index) => (
                <Card sx={{ mb: 3, boxShadow: 3 }} key={index}>
                    
                    <CardMedia
                        component="img"
                        height="150"
                        image={user.photoUrl || "https://via.placeholder.com/150"} 
                        alt={user.firstName}
                        sx={{ objectFit: "cover" }} // Ensures the image fills the space nicely
                    />

                    <CardContent>
                        <Typography variant="h6">{user.firstName}</Typography>
                        <Typography color="textSecondary">
                            {user.age || 'n/a'} years
                        </Typography>
                    </CardContent>

                    <CardActions>
                        <Button variant="contained" color="primary" onClick={() => unMatchUser()}>
                            Un-match
                        </Button>
                            <Button variant="contained" color="primary" onClick={() => chatWithUser()}>
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