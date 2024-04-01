// import React from "react";
// import './LoginForm.css';
// import { FaUser,FaLock } from "react-icons/fa";

// const LoginForm = () => {
//     return(
//         <div className="wrapper">
//             <form action="">
//                 <h1>Login</h1>
//                 <div className="input-box">
//                     <input type="text" placeholder="Username" required />
//                     <FaUser className="icon" />
//                 </div>
//                 <div className="input-box">
//                     <input type="password" placeholder="Password" required />
//                     <FaLock className="icon" />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };
// export default LoginForm; https://codepen.io/michellebarker/pen/gOMBPQj


import React from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";




const LoginForm = () => {
    return (
        <Box
            sx={{
                width: 420,
                background: "transparent",
                border: "2px solid rgba(255,255,255,.2)",
                backdropFilter: "blur(30px)",
                boxShadow: "0 0 10px rgba(0,0,0,.2)",
                color: "#ffff",
                borderRadius: 10,
                padding: "30px 40px",
            }}
        >
            <Typography variant="h1" textAlign="center">
                Login
            </Typography>
            <Box sx={{ position: "relative", width: "100%", height: 50, my: 3 }}>
                <TextField
                    placeholder="Username"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                        endAdornment: (
                            <AccountCircle
                                sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }}
                            />
                        ),
                        sx: { color: "#ffff" },
                    }}
                />
            </Box>
            <Box sx={{ position: "relative", width: "100%", height: 50, my: 3 }}>
                <TextField
                    type="password"
                    placeholder="Password"
                    variant="outlined"
                    fullWidth
                    required
                    InputProps={{
                        endAdornment: (
                            <Lock sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)" }} />
                        ),
                        sx: { color: "#ffff" },
                    }}
                />
            </Box>
            <Button variant="contained" fullWidth sx={{ mt: 3 }}>
                Login
            </Button>
        </Box>
    );
};

export default LoginForm;
