import React, { useState} from "react";
import "./Login.css"
export const Login = () => {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation criteria
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return false;
    }

    // Your form submission logic here
    const formData = new FormData(e.target);
    console.log('Form data:', Object.fromEntries(formData.entries()));

    return false;
  };
  return (
<div class="login-form">
  <form>
    <h1>Login</h1>
    <div class="content">
      <div class="input-field">
        <input type="email" placeholder="Email" autocomplete="nope"/>
      </div>
      <div class="input-field">
        <input type="password" placeholder="Password" autocomplete="new-password"/>
      </div>
      <a href="#" class="link">Forgot Your Password?</a>
    </div>
    <div class="action">
      <button>Register</button>
      <button>Sign in</button>
    </div>
  </form>
</div>
  );
};
export default  Login;