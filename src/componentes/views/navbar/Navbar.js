// Navbar.js
import React, { useState } from 'react';
import './navbar.css';
import LoginModal from '../login/login';
import logos from '../../../componentes/img/logo.jpeg';
import BannerModal from '../banner/banner'; // Asegúrate de importar BannerModal correctamente

const Navbar = () => {
  const [menuOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [bannerModalOpen, setBannerModalOpen] = useState(false);

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
              <li><a href="#">Proyectos</a></li>
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
    </div>
  );
};

export default Navbar;
