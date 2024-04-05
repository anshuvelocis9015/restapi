// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './LoginForm.css';
// import { FaUser, FaLock } from "react-icons/fa";
// import axios from "axios";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const LoginForm = () => {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({});
//     const [userData, setUserData] = useState(null);
//     const [error, setError] = useState(null);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const data = JSON.stringify({
//             "userEmail": formData.email,
//             "userPassword": formData.password
//         });

//         const config = {
//             method: 'post',
//             url: 'http://192.168.80.29/my-app/api/get-header-token',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             data: data
//         };

//         axios(config)
//             .then(function (response) {
//                 console.log("response", response?.data?.result?.userInfo);
//                 toast.success('🦄 Login Successfully!', {
//                     position: "top-right",
//                     autoClose: 5000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                     // transition: Bounce,
//                 });
//                 setUserData(response?.data?.result?.userInfo);
//                 setError(null);
//                 navigate("/user-profile", { state: { userData: response?.data?.result?.userInfo } });
//             })
//             .catch(function (error) {
//                 setUserData(null);
//                 toast.error('🦄 Login Failed!', {
//                     position: "top-right",
//                     autoClose: 2000,
//                     hideProgressBar: false,
//                     closeOnClick: true,
//                     pauseOnHover: true,
//                     draggable: true,
//                     progress: undefined,
//                     theme: "light",
//                     // transition: Bounce,
//                 });
//                 if (error.response) {
//                     setError("server Error:" + error.response.status);
//                 } else if (error.request) {
//                     setError("Network Error: The Server is not responding.");
//                 } else {
//                     setError("Request Error:" + error.message);
//                 }
//             });
//     };


//     return (
//         <div className="wrapper">
//             <form onSubmit={handleSubmit}>
//                 <h1>Login</h1>
//                 <div className="input-box">
//                     <input name="email" type="text" placeholder="Username" onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} required />
//                     <FaUser className="icon" />
//                 </div>
//                 <div className="input-box">
//                     <input name="password" type="password" placeholder="Password" onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} required />
//                     <FaLock className="icon" />
//                 </div>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };
// export default LoginForm;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
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
                const token = response?.data?.result?.headerToken;
                console.log("token is", token, "token end");
                if(token === undefined){
                    toast.error('🦄 Login UnSuccessfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        // transition: Bounce,
                        });
                }
                if (token) {
                    localStorage.setItem('token', token);
                    axios.get('http://192.168.80.29/my-app/api/my-profile', {
                        headers: {
                            'api-auth-token': `${token}`,
                            'Content-Type': 'application/json',
                        },
                        data: data
                    })
                        .then(function (userDataResponse) {
                            // console.log("userDataResponse is",JSON.stringify(userDataResponse?.data));
                            const userData = userDataResponse?.data?.result;
                            console.log("userData", userData);
                            toast.success('🦄 Login Successfully!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "light"
                            });
                            // let isAuth = JSON.parse(localStorage.getItem('token'));
                            let isAuth = localStorage.getItem('token');
                            console.log(isAuth,"isAuthentication sddsfdsfdg");
                            if (isAuth && isAuth !== null) {
                                navigate("/user-profile", { state: { userData } });
                            }
                        })
                        .catch(function (error) {
                            // Handle error
                            setError("Error retrieving user data");
                        });
                } else {
                    setError("Token not received");
                }
            })
            .catch(function (error) {
                setError("Error in login process");
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
        </div>
    );
};

export default LoginForm;

