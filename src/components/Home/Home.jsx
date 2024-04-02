import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = ({ userEmail, userPassword }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://192.168.100.59/vs-uat/api/get-header-token', {
          userEmail,
          userPassword
        }
        , {
          headers: {
            'Api-auth-key': 'your-api-key',
            'Content-Type': 'application/json'
          }
        });
        console.log(response)
        setUserData(response.data.result.userInfo);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userEmail, userPassword]);

  return (
    <div className="container mt-5">
      {userData && (
        <div>
          <p>ID: {userData.id}</p>
          <p>Email: {userData.email_id}</p>
          <p>Name: {userData.first_name} {userData.last_name}</p>
          <p>Designation: {userData.designation}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
