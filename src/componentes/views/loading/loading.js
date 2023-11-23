// src/componentes/views/loading/LoadingScreen.js

import React from 'react';
import './styles.css';
import logo from '../../img/logo.jpeg';

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <img src={logo} alt="Logo" />
      <p>CARGANDO...</p>
    </div>
  );
};

export default LoadingScreen;
