import React, { useState, useEffect, useRef } from "react";
import { Avatar, Box, Button, Paper, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { createSocketConnection } from "../utils/socketConnection";

const Chat = () => {
    const { targetUserId } = useParams();
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const messagesEndRef = useRef(null);
    
    const { user } = useSelector((state) => state.profileReducer);
    const { chatUser } = useSelector((state) => state.matchesReducer);
    
    const userId = user?._id;
    const firstName = user?.firstName;

    useEffect(() => {
        if (!userId) return;
        const socket = createSocketConnection();
        
        socket.emit('joinChat', { firstName, userId, targetUserId });

        socket.on('messageReceived', ({ userId, text }) => {
            setMessages((prev) => [...prev, { userId, text }]);
        })

        return () => {
            socket.disconnect();
        };
    }, [userId, targetUserId]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const sendMessage = () => {
        if (newMessage.trim()) {
            const socket = createSocketConnection();
            socket.emit('sendMessage', { firstName, userId, targetUserId, text: newMessage });
            setNewMessage("");
        }
    };

    return (
        <Box 
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="70vh"
        >
        <Paper elevation={3} sx={{ width: 400, p: 2, borderRadius: 3, display: "flex", flexDirection: "column", height: 500 }}>

            <Box display="flex" alignItems="center" mb={2} borderBottom="1px solid #ddd" pb={1}>
                <Avatar src={chatUser?.photoUrl || "https://upload.wikimedia.org/wikipedia/commons/b/b2/Shri_Narendra_Modi%2C_Prime_Minister_of_India_%283x4_cropped%29.jpg"} sx={{ width: 40, height: 40, mr: 1 }} />
                <Typography variant="h6" fontWeight="bold">{chatUser?.firstName} {chatUser?.lastName}</Typography>
            </Box>

            <Box sx={{ flexGrow: 1, overflowY: "auto", p: 1, bgcolor: "#f5f5f5", borderRadius: 2 }}>
                {messages.map((msg, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            justifyContent: chatUser?._id.toString() === msg.userId.toString() ? "flex-start" : "flex-end",
                            mb: 1
                        }}
                    >
                        <Typography
                            sx={{
                                bgcolor: chatUser?._id.toString() === msg.userId.toString() ? "#bbdefb" : "#e0f7fa" ,
                                px: 2, py: 1, borderRadius: 2, maxWidth: "70%"
                            }}
                        >
                            {msg.text}
                        </Typography>
                    </Box>
                ))}
                <div ref={messagesEndRef} />
            </Box>

            <Box display="flex" mt={1}>
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
