import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " Requerimientos:",
      subText: "Comprender las necesidades del cliente ",
      additionalText: "Analizar requisitos del proyecto",
      id: 1,
    },
    {
      text: " Diseño y Planificación:",
      subText: "Crear propuesta de diseño.",
      additionalText: "Establecer roles y plazos.",
      id: 2,
    },
    {
      text: " Desarrollo e Implementación:",
      subText: "Programar aplicaciones o páginas web.",
      additionalText: "Realizar pruebas continuas.",
      id: 3,
    },
    {
      text: " Mantenimiento y Actualización:",
      subText: "Brindar servicios de mantenimiento.",
      additionalText: "Realizar actualizaciones periódicas..",
      id: 4,
    },
    {
      text: " Colaboración y Comunicación:",
      subText: "Mantener comunicación con el cliente.",
      additionalText: "Colaborar internamente para mejoras continuas.",
      id: 5,
    },
  ];

  return (
    <div name="HowWeWork" className={styles.howWeWork}>
      <h2 className={styles.title}>Como Trabajamos</h2>
      {steps.map((x) => (
        <Step text={x.text} step={x.id} subText={x.subText} additionalText={x.additionalText} />
      ))}
    </div>
  );
};

export default HowWeWork;