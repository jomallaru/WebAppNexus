// Services.js
import React, { useState } from 'react';
import styles from './Services.module.css';

// Importa las imágenes desde la carpeta assets
import image1 from '../assets/app.jpg';
import image2 from '../assets/web.jpg';
import image3 from '../assets/Soporte.jpg';

const Services = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === totalSlides - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? totalSlides - 1 : prevSlide - 1));
  };

  const slideData = [
    {
      image: image1,
      title: 'Aplicación',
      description: 'Desarrollamos aplicaciones personalizadas para tus necesidades.',
    },
    {
      image: image2,
      title: 'Sitio web',
      description: 'Creamos sitios web atractivos y funcionales para tu negocio.',
    },
    {
      image: image3,
      title: 'Soporte',
      description: 'Brindamos soporte técnico para garantizar el funcionamiento de tus sistemas.',
    },
    // Agrega más datos para más slides según sea necesario
  ];

  return (
    <div name="Services" className={styles.services}>
      <p className={styles.textTitle}>Nuestros Productos y Servicios</p>
      <div className={styles.slider}>
        <div className={styles['slide-container']} style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slideData.map((slide, index) => (
            <div className={styles.slide} key={index}>
              <img src={slide.image} alt={`Slide ${index + 1}`} />
              <div className={styles['slide-content']}>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
        <p>Solucionamos los problemas de tu empresa creando increíbles Apliaciones y páginas web</p>
      </div>
    </div>
  );
};

export default Services;
