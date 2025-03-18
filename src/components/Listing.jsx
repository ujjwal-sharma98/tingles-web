import React from 'react'
import {
    Container,
    Typography,
    Button,
    Card,
    CardContent,
    CardActions,
  } from "@mui/material";

function Listing(props) {

  const { title, buttons, users } = props

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom align="center">
        {title}
      </Typography>

      {users.map((user, index) => (<Card sx={{ mb: 3, boxShadow: 3 }} key={index}>
        <CardContent>
          <Typography variant="h5">{user.name}</Typography>
          <Typography color="textSecondary">
            {user.age} years, {user.location}
          </Typography>
        </CardContent>
        <CardActions>
          {buttons.map((button, index) => (
          <Button variant="contained" color="primary" key={index}>
            {button.text}
          </Button>
          ))}
        </CardActions>
      </Card>))}
    </Container>
  )
}

export default Listing