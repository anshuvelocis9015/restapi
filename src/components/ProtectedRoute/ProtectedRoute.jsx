import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";
import UserProfile from '../Home/UserProfile';
import LoginForm from '../LoginForm/LoginForm';

const ProtectedRoute = () => {
    const isAuthenticated = localStorage.getItem('token');
    console.log(isAuthenticated,"ishdsbjjdfjdf");

    // return isAuthenticated ? <Navigate to="/user-profile" /> : <Navigate to="/" />;
    return isAuthenticated ? <UserProfile/> : <LoginForm/>;
};

export default ProtectedRoute;

