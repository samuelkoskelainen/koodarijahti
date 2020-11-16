import React from 'react';
import { Link } from 'react-router-dom'
import './Error.css'

const ErrorPage = () => {
  return (
    <div className="ErrorLayout">
      <h1>404 - Not Found</h1>
      <Link to="/">
        <button className="ErrorButton">TO LOBBY</button>
      </Link>
    </div>
  );
};

export default ErrorPage;