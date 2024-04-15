import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './SideFolder.css';
import { FaUser, FaLock } from "react-icons/fa";
// import axios from "axios";
import axios from "../../axiosInterceptor";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SideFolder = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});
    const [error, setError] = useState(null);
    // const [userData, setUserData]= useState({});
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = JSON.stringify({
            "ws_type": formData.type,
            "ws_id": formData.id
        });

        const config = {
            method: 'post',
            url: 'http://192.168.80.56/my-app/api/get-sidebar-folder-details',
            headers: {
                'api-auth-token': `${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            data: data
        };
        debugger
        axios(config)
            .then(function (response) {
                // const token = response?.data?.result?.headerToken;
                const userData = response?.data?.result;
                console.log("token is",userData, "token end",userData );
                if (response?.data?.success !== 200) {
                    toast.error('🦄 Submit UnSuccessfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
                if (response?.data?.success === 200) {
                    // localStorage.setItem('token', token);
                    navigate("/sidefolder-details" , { state: { state :userData } });
                } else {
                    setError("Details not received");
                }
            })
            .catch(function (error) {
                setError("Error in details process");
            });
    };


    return (
        <div className="wrapper">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div className="input-box">
                    <input name="type" type="text" placeholder="WSTYPE" onChange={(e) => { setFormData({ ...formData, type: e.target.value }) }} required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input name="id" type="text" placeholder="WSID" onChange={(e) => { setFormData({ ...formData, id: e.target.value }) }} required />
                    <FaLock className="icon" />
                </div>
                <button type="submit"
                onClick={()=>{
                    navigate("/sidefolder-details")
                }}
                >Submit</button>
            </form>
        </div>
    );
};

export default SideFolder;
