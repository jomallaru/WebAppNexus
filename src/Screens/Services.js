import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>
      <p>Solucionamos los problemas de tu empresa creando increíbles Apliaciones y páginas web</p>
      <img
        className={styles.webImage}
        src={require("../assets/Inicio.gif")}
        alt="Web Image"
      />

      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Apliaciones Web</h2>
          <p>Desarrollaremos aplicaciones web a medida que cumplen con los requisitos específicos de nuestros clientes. Desde plataformas de comercio electrónico hasta sistemas de gestión empresarial, nuestras aplicaciones están diseñadas para brindar funcionalidad y experiencia de usuario excepcionales.</p>
        </div>

        <div className={styles.card}>
          <h2>Paginas Web</h2>
          <p>Crearemos sitios web visualmente atractivos y funcionales que representan la identidad única de cada cliente. Nuestro enfoque se centra en la usabilidad, el diseño receptivo y la optimización para motores de búsqueda, garantizando una presencia en línea efectiva.</p>
        </div>

        <div className={styles.card}>
          <h2>Soporte y Mantenimiento</h2>
          <p>Ofreceremos servicios integrales de soporte técnico y mantenimiento para garantizar el rendimiento continuo y la seguridad de las aplicaciones y sitios web. Esto incluye actualizaciones, monitoreo de seguridad y atención rápida a problemas técnicos</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
