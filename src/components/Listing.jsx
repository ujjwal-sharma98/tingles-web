import React from 'react';
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
    CardMedia,
} from "@mui/material";

function Listing(props) {
    const { title, buttons, users } = props;

    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant="h4" gutterBottom align="center">
                {title}
            </Typography>

            <Typography variant="h6" gutterBottom align="center">
                {users.length > 0 ? users.length : 'No'} {users.length === `` ? 'user' : 'users'} found !!
            </Typography>

            {users.map((user, index) => (
                <Card sx={{ mb: 3, boxShadow: 3 }} key={index}>
                    
                    <CardMedia
                        component="img"
                        height="150"
                        image={user.fromUserId.photoUrl || "https://via.placeholder.com/150"} 
                        alt={user.fromUserId.firstName}
                        sx={{ objectFit: "cover" }} // Ensures the image fills the space nicely
                    />

                    <CardContent>
                        <Typography variant="h6">{user.name}</Typography>
                        <Typography color="textSecondary">
                            {user.fromUserId.age} years
                        </Typography>
                    </CardContent>

                    <CardActions>
                        {buttons.map((buttonItem, btnIndex) => (
                            <Button variant="contained" color="primary" key={btnIndex} onClick={buttonItem.buttonFn}>
                                {buttonItem.text}
                            </Button>
                        ))}
                    </CardActions>
                </Card>
            ))}
        </Container>
    );
}

export default Listing;
