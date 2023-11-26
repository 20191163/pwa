import React, { useState, useEffect } from 'react';
import addNotification from 'react-push-notification';
import './navbar.css';
import LoginModal from '../login/login';
import logos from '../../../componentes/img/logo.jpeg';
import BannerModal from '../banner/banner';

const Navbar = () => {
  const [menuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [showOfflineMessage, setShowOfflineMessage] = useState(false);

  useEffect(() => {
    // Agregar un evento para manejar cambios en la conexión
    const handleConnectionChange = () => {
      setIsOnline(navigator.onLine);
      if (!navigator.onLine) {
        setShowOfflineMessage(true);
        setTimeout(() => {
          setShowOfflineMessage(false);
        }, 5000); // 5000 milisegundos (5 segundos)
      }
    };

    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    };
  }, []);

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseLoginModal = () => {
    setLoginModalOpen(false);
  };

  const handleBannerClick = () => {
    setBannerModalOpen(true);
  };

  const handleCloseBannerModal = () => {
    setBannerModalOpen(false);
  };

  const clickTONotify = () => {
    addNotification({
      title: 'Notificación de prueba',
      message: 'Es un pequeño paso para el hombre, pero un gran paso para la humanidad.',
      duration: 4000,
      theme: 'darkblue',
      native: true,
      icon: logos,
    });
  };

  return (
    <div className='content'>
      <header className={`menu__wrapper ${menuOpen ? 'menu__wrapper--open' : ''}`}>
        <div className="menu__bar">
          <div className="logo">
            <img src={logos} alt="" className="logo-image" />
          </div>

          <div className="temas-var">
            <ul className="nav-var">
              <li>
                <a href="#" onClick={handleBannerClick}>
                  Desarrollador
                </a>
              </li>
              <li>
                <a href="#" onClick={clickTONotify}>
                  Notificación
                </a>
              </li>
              <li><a href="#">Testimonios</a></li>
              <li><a href="#">Contactos</a></li>
            </ul>
          </div>
          <div className={`action-buttons ${menuOpen ? 'hide' : ''}`}>
            <button onClick={handleLoginClick} title="Log in" className="primary" style={{ backgroundColor: '#e3413f' }}>
              Log In
            </button>
          </div>
        </div>
      </header>
      {loginModalOpen && <LoginModal onClose={handleCloseLoginModal} />}
      {bannerModalOpen && <BannerModal onClose={handleCloseBannerModal} />}
      {showOfflineMessage && (
        <div className="offline-message">
          Oh no, parece que no estás conectado a internet, no te preocupes, gran parte del contenido sigue funcionando.
        </div>
      )}
    </div>
  );
};

export default Navbar;
