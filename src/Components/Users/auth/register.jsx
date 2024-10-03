// Register.js
import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';

const Register = ({ onRegister }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        const user = { username, password, email };

        fetch("http://localhost:8080/api/admin/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Registration failed");
                }
                return response.json();
            })
            .then(() => {
                setSuccess("Registration successful! You can now log in.");
                setUsername("");
                setPassword("");
                setEmail("");
                onRegister(); // Optionally, handle post-registration logic
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h4" gutterBottom>Register</Typography>
            {success && <Typography color="green">{success}</Typography>}
            {error && <Typography color="red">{error}</Typography>}
            <form onSubmit={handleRegister}>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                    Register
                </Button>
            </form>
        </Box>
    );
};

export default Register;
