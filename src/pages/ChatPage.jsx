import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Avatar, Box, Button, Paper, TextField, Typography } from "@mui/material";

const Chat = () => {
  const { targetUserId } = useParams();
  const [messages, setMessages] = useState([
    { text: "Hey, how's it going?" },
    { text: "All good! What about you?" },
  ]);
  const [newMessage, setNewMessage] = useState("");
  const user = useSelector((store) => store.user);
  const userId = user?._id;

  const sendMessage = () => {}

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <Paper elevation={3} sx={{ width: 400, p: 2, borderRadius: 3 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box display="flex" alignItems="center">
          <Avatar src={"https://upload.wikimedia.org/wikipedia/commons/b/b2/Shri_Narendra_Modi%2C_Prime_Minister_of_India_%283x4_cropped%29.jpg"} sx={{ width: 40, height: 40, mr: 1 }} />
          <Typography variant="subtitle1" fontWeight="bold">User</Typography>
        </Box>
      </Box>

      {/* Chat Messages */}
      <Box sx={{
        maxHeight: 250, overflowY: "auto", bgcolor: "#f5f5f5",
        borderRadius: 2, p: 2, mb: 2
      }}>
        {messages.map((msg, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: msg.sender === targetUserId ? "flex-start" : "flex-end",
              mb: 1
            }}
          >
            <Typography
              sx={{
                bgcolor: msg.sender === userId ? "#e0f7fa" : "#bbdefb",
                px: 2, py: 1, borderRadius: 2, maxWidth: "70%"
              }}
            >
              {msg.text}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Input Field & Send Button */}
      <Box display="flex">
        <TextField
          variant="outlined"
          fullWidth
          size="small"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <Button variant="contained" color="primary" sx={{ ml: 1 }} onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Paper>
    </Box>
  );
};
export default Chat;