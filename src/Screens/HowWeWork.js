import React from "react";
import styles from "./HowWeWork.module.css";
import Step from "../Components/Step";

const HowWeWork = () => {
  const steps = [
    {
      text: " Requerimientos:",
      subText: "Comprenderemos los requisitos del cliente.",
      additionalText: "Analizaremos las necesidades del cliente.",
      id: 1,
    },
    {
      text: " Diseño y Planificación:",
      subText: "Crearemos un plan de negocio.",
      additionalText: "Estableceremos las metas y objetivos.",
      id: 2,
    },
    {
      text: " Desarrollo e Implementación:",
      subText: "Programaremos el proyecto.",
      additionalText: "Realizaremos el diseño y desarrollo.",
      id: 3,
    },
    {
      text: " Mantenimiento y Actualización:",
      subText: "Brindaremos soporte técnico.",
      additionalText: "Realizaremos actualizaciones y mantenimiento.",
      id: 4,
    },
    {
      text: " Colaboración y Comunicación:",
      subText: "Mantedremos la comunicación con el cliente.",
      additionalText: "Colaboraremos con el cliente.",
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