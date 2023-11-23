// src/App.js

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from './componentes/views/navbar/Navbar';
import Footer from './componentes/views/footer/footer';
import Card from './componentes/views/cards/cards';
import LoadingScreen from './componentes/views/loading/loading';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula un tiempo de carga, por ejemplo, 2 segundos
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      <Helmet>
        <link rel="icon" type="image/png" href="./componentes/img/logo.jpeg" />
      </Helmet>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar />
          <Card />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
