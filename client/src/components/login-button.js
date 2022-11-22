// src/components/login-button.js

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import "../components/nav-bar.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-default"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;