import React from 'react';
import desa from '../../img/juandedios.jpg';
import './banner.css';

const BannerModal = ({ onClose }) => {
  return (
    <div className='modal-container'>
      <section className="banner">
        <img src={desa} alt="Juan de Dios" className="banner-image" />
        <div className="banner-content">
          <h2>Hello</h2>
          <p>I'm Juan de Dios, a talented frontend dev</p>
          {/* Botón de cierre */}
          <button onClick={onClose} className="close-button">
            X
          </button>
        </div>
      </section>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="waves">
          {/* Cambiando el color de las olas */}
          <use xlinkHref="#gentle-wave" fill="#ffffff" fillOpacity="2" />
          <use xlinkHref="#gentle-wave" y="3" fill="#f6403e" fillOpacity="5" />
          <use xlinkHref="#gentle-wave" y="6" fill="#86ac9b" fillOpacity="9" />
        </g>
      </svg>
    </div>
  );
};

export default BannerModal;
