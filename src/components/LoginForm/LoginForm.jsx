import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            "userEmail": formData.email,
            "userPassword": formData.password
        });

        const config = {
            method: 'post',
            url: 'http://192.168.80.29/my-app/api/get-header-token',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log("response",response?.data?.result?.userInfo);
                setUserData(response?.data?.result?.userInfo);
                setError(null);
                navigate("/user-profile", {state:{userData: response?.data?.result?.userInfo}});
            })
            .catch(function (error) {
                setUserData(null);
                if(error.response){
                    setError("server Error:"+ error.response.status);
                }else if(error.request){
                    setError("Network Error: The Server is not responding.");
                }else{
                    setError("Request Error:"+ error.message);
                }
            });
    };

    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input name="email" type="text" placeholder="Username" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input name="password" type="password" placeholder="Password" onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} required />
                    <FaLock className="icon" />
                </div>
                <button type="submit">Login</button>
            </form>
            {/* <div className="container mt-5">
                {userData && (
                    <div>
                        <p>ID: {userData.id}</p>
                        <p>Email: {userData.email_id}</p>
                        <p>Name: {userData.first_name} {userData.last_name}</p>
                        <p>Designation: {userData.designation}</p>
                    </div>
                )}
                {error && <div>{error}</div>}
            </div> */}
        </div>
    );
};
export default LoginForm;
