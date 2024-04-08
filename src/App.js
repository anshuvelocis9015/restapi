import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import UserProfile from "./components/Home/UserProfile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    {/* <ProtectedRoute path="/user-profile" element={<UserProfile />} /> */}
                    <Route path="/user-profile" element={<ProtectedRoute Component={UserProfile}/>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
