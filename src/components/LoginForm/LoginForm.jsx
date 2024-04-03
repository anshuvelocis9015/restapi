import React, { useState } from "react";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

const LoginForm = () => {
    const [formData, setFormData] = useState({});
    const handleSubmit = (event) => {
        console.log('fasdfsdf', event.target)
        event.preventDefault();
        var data = JSON.stringify({
            "userEmail": formData.email,
            "userPassword": formData.password
        });

        var config = {
            method: 'post',
            url: 'http://192.168.100.59/vs-uat/api/get-header-token',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

        // axios.post('http://192.168.100.59/vs-uat/api/get-header-token',{ userEmail: email, userPassword: password }).then(res => {
        //     console.log(res);
        // }).catch(err => {console.error(err);});

        // onSubmit(email.value, password.value);
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
        </div>
    );
};
export default LoginForm;
