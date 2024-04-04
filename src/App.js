import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import UserProfile from "./components/Home/UserProfile";

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route exact path="/" element={<LoginForm />} />
                    <Route exact path="/user-profile" element={<UserProfile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
