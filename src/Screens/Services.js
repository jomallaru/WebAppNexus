import React from "react";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div name="Services" className={styles.services}>      
      <p className={styles.textTitle}>Nuestros Productos y Servicios</p>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h2>Apliaciones Web</h2>
          <p>Creamos aplicaciones web personalizadas que satisfacen las necesidades específicas de nuestros clientes, ofreciendo funcionalidad y experiencia de usuario excepcionales, desde plataformas de comercio electrónico hasta sistemas de gestión empresarial.</p>
        </div>

        <div className={styles.card}>
          <h2>Paginas Web</h2>
          <p>Crearemos sitios web visualmente atractivos y funcionales que representan la identidad única de cada cliente. Nuestro enfoque se centra en la usabilidad, el diseño receptivo y la optimización para motores de búsqueda, garantizando una presencia en línea efectiva.</p>
        </div>

        <div className={styles.card}>
          <h2>Soporte y Mantenimiento</h2>
          <p>Ofrecemos soporte técnico y mantenimiento integral para garantizar el rendimiento y seguridad de aplicaciones y sitios web.</p>
        </div>
      </div>
      <p>Solucionamos los problemas de tu empresa creando increíbles Apliaciones y páginas web</p>
    </div>
  );
};

export default Services;
