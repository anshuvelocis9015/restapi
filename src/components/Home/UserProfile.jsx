
import React from "react";
import { useLocation } from "react-router-dom";

const UserProfile = () => {
  const location = useLocation();
  const userData = location.state?.userData;

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
      </div>
    </div>
  );
};

export default UserProfile;
