import React from 'react';
import LoginForm from './components/LoginForm/LoginForm';
// import Home from './components/Home/Home';

const App = () => {
  // const [userEmail, setUserEmail] = useState('');
  // const [userPassword, setUserPassword] = useState('');

  // const handleLoginFormSubmit = (email, password) => {
  //   setUserEmail(email);
  //   setUserPassword(password);
  // };

  return (
    <div>
      {/* <LoginForm onSubmit={handleLoginFormSubmit} /> */}
      <LoginForm />
      {/* <Home userEmail={userEmail} userPassword={userPassword} /> */}
    </div>
  );
};

export default App;