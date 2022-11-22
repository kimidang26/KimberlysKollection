// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "./logout-button.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="w3-button w3-brown"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;