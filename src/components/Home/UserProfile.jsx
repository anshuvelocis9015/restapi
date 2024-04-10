// import React from "react";
// import { useLocation } from "react-router-dom";

// const UserProfile = () => {
//   const location = useLocation();
//   const id = location?.state?.userData?.id;
//   const user_id = location?.state?.userData?.user_id;
//   const user_name = location?.state?.userData?.user_name;
//   const email =location?.state?.userData?.email_id;
//   const first_name = location?.state?.userData?.first_name;
//   const last_name = location?.state?.userData?.last_name;
//   const designation = location?.state?.userData?.designation;
//     return (
//         <div className="container mt-5">
//             <h1>User Profile</h1>{console.log("name",location?.state?.userData?.email_id)}
//             <p>ID: {id}</p>
//             <p>USER_ID:{user_id}</p>
//             <p>USER_NAME:{user_name}</p>
//             <p>Email: {email}</p>
//             <p>Name: {first_name} {last_name}</p>
//             <p>Designation: {designation}</p>
//         </div>
//     );
// };

// export default UserProfile;


// import React from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import './UserProfile.css';

// const UserProfile = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const userData = location.state?.userData;

//   return (
//     <div className="container mt-5">
//       <h1>User Profile</h1>
//       <div className="card">
//         <div className="card-body">
//           <h5 className="card-title">User Information</h5>
//           <p className="card-text">
//             <strong>ID:</strong> {userData?.id}
//           </p>
//           <p className="card-text">
//             <strong>User ID:</strong> {userData?.user_id}
//           </p>
//           <p className="card-text">
//             <strong>User Name:</strong> {userData?.user_name}
//           </p>
//           <p className="card-text">
//             <strong>Email:</strong> {userData?.email_id}
//           </p>
//           <p className="card-text">
//             <strong>Name:</strong> {userData?.first_name} {userData?.last_name}
//           </p>
//           <p className="card-text">
//             <strong>Designation:</strong> {userData?.designation}
//           </p>
//         </div>
//         <button type="submit" onClick={()=>{localStorage.clear()
//          navigate("/")}}>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './UserProfile.css';
// import axios from "axios";
import axios from "../../axiosInterceptor";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserProfile = () => {
  const navigate = useNavigate();
  const [userData, setUserData]= useState({});
  useEffect(() => {
    axios.get("http://192.168.80.56/my-app/api/my-profile",{
      headers: {
        'api-auth-token': `${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      }}).then((response) => {
          if (response?.data?.success === 200) {
            setUserData(response?.data?.result)
            toast.success("User details")
            console.log("User Profile", response)

          } else {
            console.log("Hello this is error")
          }
        }).catch((error)=> console.log(error))
    }, []);
    return (
      <div className="container mt-5">
        <h1>User Profile</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">User Information</h5>
            <p className="card-text">
              <strong>ID:</strong> {userData?.id}
            </p>
            <p className="card-text">
              <strong>User ID:</strong> {userData?.user_id}
            </p>
            <p className="card-text">
              <strong>User Name:</strong> {userData?.user_name}
            </p>
            <p className="card-text">
              <strong>Email:</strong> {userData?.email_id}
            </p>
            <p className="card-text">
              <strong>Name:</strong> {userData?.first_name} {userData?.last_name}
            </p>
            <p className="card-text">
              <strong>Designation:</strong> {userData?.designation}
            </p>
          </div>
          <button type="submit" onClick={() => {
            localStorage.clear()
            navigate("/")
          }}>Logout</button>
        </div>
      </div>
    );
  };

  export default UserProfile;

