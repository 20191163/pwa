import React, { useEffect, useState } from 'react';
import addNotification from 'react-push-notification';
import logo from '../../../componentes/img/logo.jpeg';
import '../pesca/pesca.css';

const Pesca = ({ onClose }) => {
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

  const clickTONotify = () => {
    addNotification({
      title: 'Notificación de prueba',
      message: 'Es un pequeño paso para el hombre, pero un gran paso para la humanidad.',
      duration: 4000,
      theme: 'darkblue',
      native: true,
      icon: logo,
    });
  };

  return (
    <div style={{ textAlign: 'center' }}>
      {isOnline ? (
        <div>
          <button onClick={clickTONotify} style={{ margin: '100px' }}>
            Click para notificar
          </button>
        </div>
      ) : (
        <div>
          {showOfflineMessage && (
            <div className="offline-message">
              Oh no, parece que no estás conectado a internet, no te preocupes, gran parte del contenido sigue funcionando.
            </div>
          )}
        </div>
      )}
      <button onClick={onClose}>Cerrar Pesca</button>
    </div>
  );
};

export default Pesca;
