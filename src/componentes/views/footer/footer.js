import React, { useState } from 'react';

const Footer = () => {
  const [isPrivacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [isTermsModalOpen, setTermsModalOpen] = useState(false);

  const openPrivacyModal = () => {
    setPrivacyModalOpen(true);
  };

  const openAboutModal = () => {
    setAboutModalOpen(true);
  };

  const openTermsModal = () => {
    setTermsModalOpen(true);
  };

  const closeModal = () => {
    setPrivacyModalOpen(false);
    setAboutModalOpen(false);
    setTermsModalOpen(false);
  };

  return (
    <footer style={styles.footer}>
      <p>© 2023 Refresco</p>
      <p>
        <span onClick={openPrivacyModal}>Políticas de Privacidad</span>
        {' | '}
        <span onClick={openAboutModal}>Acerca de Nosotros</span>
        {' | '}
        <span onClick={openTermsModal}>Términos y Condiciones</span>
      </p>

      {isPrivacyModalOpen && (
  <div style={styles.modalOverlay}>
    <div style={styles.modalContent}>
      <h2>Políticas de Privacidad</h2>
      <p>
        En Soda, valoramos y respetamos tu privacidad. Nuestras políticas de privacidad están diseñadas
        para proteger la información personal que compartes con nosotros y garantizar una experiencia
        segura y confiable.
      </p>
      <p>
        <strong>Recopilación de Información:</strong> Recopilamos información limitada y relevante
        necesaria para brindarte nuestros servicios. Esta información puede incluir datos personales,
        como nombre, dirección de correo electrónico y preferencias de comunicación.
      </p>
      <p>
        <strong>Uso de la Información:</strong> Utilizamos la información recopilada para personalizar
        tu experiencia, mejorar nuestros productos y servicios, y garantizar la seguridad de nuestras
        operaciones comerciales. No compartimos tu información con terceros sin tu consentimiento.
      </p>
      <p>
        <strong>Seguridad:</strong> Implementamos medidas de seguridad para proteger tu información
        contra accesos no autorizados y garantizar la integridad de nuestros sistemas.
      </p>
      <p>
        <strong>Actualizaciones:</strong> Periodicamente revisamos y actualizamos nuestras políticas
        de privacidad. Te recomendamos que revises esta sección para estar informado sobre cualquier
        cambio.
      </p>
      <p>
        Al utilizar nuestros servicios, aceptas nuestras políticas de privacidad. Si tienes alguna
        pregunta o inquietud, no dudes en contactarnos.
      </p>
      <button onClick={closeModal}>Cerrar</button>
    </div>
  </div>
)}


{isAboutModalOpen && (
  <div style={styles.modalOverlay}>
    <div style={styles.modalContent}>
      <h2>Acerca de Nosotros</h2>
      <p>
        Bienvenido a Soda, tu destino para disfrutar de refrescantes bebidas y deliciosos aperitivos.
        En Soda, nos enorgullece ofrecer experiencias únicas a nuestros clientes, fusionando sabores
        excepcionales con un ambiente acogedor.
      </p>
      <p>
        Nuestra misión es crear momentos memorables, donde cada sorbo de nuestras bebidas sea una
        explosión de sabor. Con ingredientes frescos y recetas cuidadosamente elaboradas, garantizamos
        una experiencia refrescante en cada visita.
      </p>
      <p>
        En Soda, valoramos la calidad, la creatividad y la satisfacción del cliente. Nuestro equipo
        está dedicado a proporcionar un servicio excepcional y a superar las expectativas de quienes
        eligen deleitarse con nuestras creaciones.
      </p>
      <p>
        ¡Gracias por elegir Soda! Esperamos que disfrutes de tu visita y que te unas a nosotros en
        la celebración de los placeres simples de la vida a través de nuestras deliciosas bebidas.
      </p>
      <button onClick={closeModal}>Cerrar</button>
    </div>
  </div>
)}


{isTermsModalOpen && (
  <div style={styles.modalOverlay}>
    <div style={styles.modalContent}>
      <h2>Términos y Condiciones</h2>
      <p>
        Al utilizar nuestro sitio web, aceptas cumplir con los siguientes términos y condiciones:
      </p>
      <ol>
        <li>
          <strong>Uso Adecuado:</strong> El usuario se compromete a utilizar el sitio web
          de manera ética y legal, respetando los derechos de otros usuarios y de la plataforma.
        </li>
        <li>
          <strong>Propiedad Intelectual:</strong> Todo el contenido proporcionado en el sitio,
          incluyendo textos, gráficos, logotipos, imágenes, y software, está protegido por derechos
          de propiedad intelectual y no puede ser utilizado sin autorización.
        </li>
        <li>
          <strong>Privacidad:</strong> Respetamos la privacidad de nuestros usuarios. La información
          personal proporcionada será tratada con confidencialidad y no será compartida con terceros
          sin consentimiento.
        </li>
        <li>
          <strong>Actualizaciones:</strong> Nos reservamos el derecho de realizar cambios en estos
          términos y condiciones en cualquier momento. Se recomienda revisar periódicamente esta sección
          para estar al tanto de las actualizaciones.
        </li>
      </ol>
      <p>
        Al continuar utilizando nuestro sitio web, el usuario acepta estos términos y condiciones.
      </p>
      <button onClick={closeModal}>Cerrar</button>
    </div>
  </div>
)}

    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f0f0f0',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
    bottom: 0,
    width: '100%',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    maxWidth: '600px',
  },
};

export default Footer;
