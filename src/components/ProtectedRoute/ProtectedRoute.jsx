// import React from 'react';
// import { Route, Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ element: Component, ...rest }) => {
//     const isAuthenticated = localStorage.getItem('token');
//     console.log(isAuthenticated,"ishdsbjjdfjdf");

//     return isAuthenticated ? <Component {...rest} /> : <Navigate to="/" />;
// };

// export default ProtectedRoute;

// ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = () => {
    // const{Component} = props;
    const isAuthenticated = localStorage.getItem('token');
    console.log(isAuthenticated,"ishdsbjjdfjdf");

    return isAuthenticated ? <Navigate to="/user-profile" /> : <Navigate to="/" />;
};

export default ProtectedRoute;

